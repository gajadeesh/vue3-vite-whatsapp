import { mount } from '@vue/test-utils';
import Button from '@/components/elements/btn.vue';

describe('expected button element props passed', () => {

  let wrapper;

  beforeEach(() =>{
    const icon = 'mdi-microphone'
    const variant = 'text'
    const size ='medium'

     wrapper = mount(Button, {
      props: { icon, variant,size}
    })
  });
  it('renders props.icon when passed', () => {

    expect(wrapper.html()).toContain('mdi-microphone')
  })

  it('renders props.variant when passed', () => {

    expect(wrapper.html()).toContain('text')
  })

  it('renders props.size when passed', () => {

    expect(wrapper.html()).toContain('medium')
  })
});

