import Accordian from '../components/Accordion'

export default {
  name: 'test',
  type: 'array',
  title: 'Test Page Builder',
  description: 'some description',
  of: [
    { type: 'pageBuilderHero' },
    { type: 'pageBuilderContent' },
    { type: 'pageBuilderColumns' },
    { type: 'pageBuilderCards' },
    { type: 'pageBuilderPosts' },
    { type: 'pageBuilderPartners' },
    { type: 'pageBuilderStatistics' },
  ],
  inputComponent: Accordian,
}
