function ImageScreen(props) {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Button title="Back" onPress={() => navigation.goBack()} />
            <Image source={{ uri: props.selectedAsset.uri }} style={styles.image} />
        </View>
    );
}
export { ImageScreen };