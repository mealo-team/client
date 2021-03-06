import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { RecipeSmallCard } from '../components'
import { SearchBar } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';
import { useQuery } from '@apollo/client';
import { QUERY_SEARCH_RECIPE } from '../config/queries';
import Constants from 'expo-constants'

function Search({ navigation }) {
	const [search, setSearch] = useState('');
	const { data, error } = useQuery(QUERY_SEARCH_RECIPE, {
		variables: {
			query: search
		}
	})

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.headerText}>Search for Recipe</Text>
			</View>
			<SearchBar
				placeholder="Search for recipes..."
				onChangeText={setSearch}
				value={search}
				lightTheme={true}
				round={true}
				containerStyle={{
					backgroundColor: '#FFF',
					borderBottomColor: 'transparent',
					borderTopColor: 'transparent',
					marginTop: 20
				}}
				inputContainerStyle={{
					backgroundColor: '#f5f6fa',
					marginLeft: 25,
					marginRight: 25,
					height: 45
				}}
				inputStyle={{
					fontSize: 15
				}}
			/>
			<ScrollView>
				{error && <Text>{JSON.stringify(error.message)}</Text>}
				{data && data.queryRecipes.map((recipe) => (
					<RecipeSmallCard navigation={navigation} key={recipe.id} recipe={recipe} />
				))}
			</ScrollView>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		justifyContent: 'flex-start',
		marginTop: Constants.statusBarHeight
	},
	header: {
		height: '8%',
		flexDirection: 'row',
		alignItems: 'flex-start',
		justifyContent: 'space-between',
		marginLeft: 25,
		marginRight: 25,
		paddingBottom: 35,
		paddingTop: 20
	},
	headerText: {
		fontWeight: 'bold',
		fontSize: 26,
		color: 'black',
		letterSpacing: 1,
		fontFamily: 'Oswald',
	}
});

export default Search