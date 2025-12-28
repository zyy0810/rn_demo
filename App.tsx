import { NestedScrollView, NestedScrollViewHeader } from '@sdcx/nested-scroll';
import { FlatList, Text, View, useWindowDimensions } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

function App() {
  const { width: screenWidth } = useWindowDimensions();

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <NestedScrollView>
          <NestedScrollViewHeader stickyHeaderBeginIndex={1}>
            <View
              style={{
                width: '100%',
                height: 200,
                backgroundColor: '#000',
              }}
            />
            <View
              style={{
                width: '100%',
                height: 200,
                backgroundColor: 'red',
              }}
            />
          </NestedScrollViewHeader>
          <FlatList
            nestedScrollEnabled
            data={Array(10).fill(0)}
            renderItem={({ index }) => (
              <View
                style={{
                  width: screenWidth,
                  height: 200,
                  backgroundColor: index % 2 == 0 ? 'pink' : '#ccc',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Text style={{ fontSize: 30 }}>{index}</Text>
              </View>
            )}
          />
        </NestedScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;
