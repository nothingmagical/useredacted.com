import styled from 'styled-components'
import Page from '../components/page'
import Subheading from '../components/subheading'
import MacAppStoreButton from '../components/mac_app_store_button'
import IOSAppStoreButton from '../components/ios_app_store_button'

const VideoContainer = styled.div`
  position: relative;
  left: -44px;
  width: 640px;

  @media all and (max-width: 660px) {
    display: none;
  }
`


export default () => (
  <Page>
    <Subheading style={{ "marginBottom": "20px" }}>Easily obscure parts of an image</Subheading>
    <VideoContainer>
      <video src="/static/video@2x.mp4" width="818" height="689" controls muted />
    </VideoContainer>
    <p>Hide sensitive details in an image by simply clicking and dragging. Copy and paste in and out of Redacted for super quick sharing. Pick from three different redaction styles or mix and match.</p>
    <p>
      <MacAppStoreButton />
      <IOSAppStoreButton />
    </p>
  </Page>
)
