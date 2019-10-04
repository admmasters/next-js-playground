import Header from './Header'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

const withLayout = Page => () => (
  <div style={layoutStyle}>
    <Header />
    <Page />
  </div>
)

export default withLayout
