import { View, Text } from 'react-native'
import { useParams } from 'react-router-native';
import useRepositories from '../hooks/useRepositories';

const RepositorySingle = () => {
    const { repositories, loading } = useRepositories();
    console.log(loading)
    const { id } = useParams()
    const repository = repositories.find(repo => String(repo.id) === id)
    console.log("balls")

    if (loading) {
        return (
            <View>
                <Text>balls</Text>
            </View>
        )
    }

    return (
        <View>
            <Text>cock</Text>
        </View>
    )
}

export default RepositorySingle