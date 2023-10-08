import { mount } from '@vue/test-utils';
import searchInput from '@/components/elements/search-input.vue'


describe('expected button element props passed',  () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(searchInput,{
            data(){
                return{
                    search: "Gapstar"
                }
            }
        })
    });

    it('renders search input text', async () => {

        const search = await wrapper.find('[data-test="search"]')

        expect(search.element.value).toBe('Gapstar')
    })

});