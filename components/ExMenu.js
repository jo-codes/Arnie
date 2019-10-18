// old homepage, scrapped for react nav scratch

const theme = {
  Header: {
    backgroundColor: '#f7f7f7'
  }
};

export default function App() {
  return (
    <View style={styles.container}>
      <ThemeProvider theme={theme}>
        <View style={styles.header}>
          <Header
            leftComponent={{ icon: 'menu', color: '#0f0f0f' }}
            centerComponent={{ text: 'Arnie', style: { color: '#0f0f0f' } }}
            rightComponent={{ icon: 'home', color: '#0f0f0f' }}
          />
        </View>
      </ThemeProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    flex: 1,
    alignSelf: 'stretch'
  }
});
