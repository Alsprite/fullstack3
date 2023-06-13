import { Alert, Text, TextInput, TouchableOpacity, View, StyleSheet } from 'react-native';
import { useQuery, useMutation } from '@apollo/client';
import { GET_CURRENT_USER } from '../graphql/queries';
import { DELETE_REVIEW } from '../graphql/mutation'
import { styles as repoStyles } from '../repositoryItemStyles.js';
import { Link } from 'react-router-native'

const styles = StyleSheet.create(repoStyles);

const Reviews = () => {
  const [deleteReview] = useMutation(DELETE_REVIEW);
    const { loading, error, data, refetch } = useQuery(GET_CURRENT_USER, {
        variables: { includeReviews: true },
      });
      if (loading) {
        return (
          <View>
            <Text>Loading...</Text>
          </View>
        );
      }
    
      if (error) {
        return (
          <View>
            <Text>Error occurred: {error.message}</Text>
          </View>
        );
      }
    
      const { me } = data;
    
      if (!me) {
        return (
          <View>
            <Text>No user found.</Text>
          </View>
        );
      }
    
    const reviews = me.reviews.edges.map((edge) => edge.node);
    reviews.sort((a, b) => b.rating - a.rating);

    const handleDelete = async ({ id }) => {
      const { data } = await deleteReview({ variables: { id } });
      if (data.deleteReview) refetch();
    };

    return (
        <View>
            {reviews.map((review) => (
                <View key={review.id}>
                    <View style={{ backgroundColor: 'white', padding: 15, paddingBottom: 30 }}>
                    <View style={{ flexDirection: 'row', marginBottom: 15 }}>
                        <View style={styles.ratingContainer}>
                            <Text style={styles.ratingText}>{review.rating}</Text>
                        </View>
                    <View style={{ flexGrow: 1, flexShrink: 1 }}>
                        <Text style={styles.nameText}>{review.repository.fullName}</Text>
                        <Text style={styles.dateText}>{review.createdAt.slice(0, 10)}</Text>
                        <Text>{review.text}</Text>
                    </View>
                    <Link to={`/repo/${review.repositoryId}`}><Text style={styles.primaryButtonText}>View repository</Text></Link>
                    <TouchableOpacity onPress={() => handleDelete(review)}>
                <Text style={styles.warningButtonText}>Delete review</Text>
              </TouchableOpacity>
                </View>
            </View>
        </View>
        ))}
    </View>
    );
};

export default Reviews