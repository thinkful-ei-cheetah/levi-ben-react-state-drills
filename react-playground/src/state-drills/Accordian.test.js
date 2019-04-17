import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import Accordian from './Accordian';
configure({ adapter: new Adapter() });

describe(`Accordian Component`, () => {
    const sections = [
        {
          title: 'Section 1',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        },
        {
          title: 'Section 2',
          content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
        },
        {
          title: 'Section 3',
          content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
        },
    ]
    // Smoke test
    it('renders without errors', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Accordian sections={sections}/>, div);
        ReactDOM.unmountComponentAtNode(div);
    })

    // The component renders an empty li when the sections prop is not supplied
    it('renders as expected without props passed in', () => {
        const tree = renderer
          .create(<Accordian  />)
          .toJSON();
        expect(tree).toMatchSnapshot();  
    });

    // The component renders no sections as active by default
    it('renders as expected with sections passed in', () => {
        const tree = renderer
          .create(<Accordian sections={sections} />)
          .toJSON();
        expect(tree).toMatchSnapshot();  
    });

    // The component opens a clicked section
    it('The component opens section 2 when clicked', () => {
        const wrapper = shallow(<Accordian sections={sections}/>)
        wrapper.find('button').at(1).simulate('click')
        expect(toJson(wrapper)).toMatchSnapshot()
    })
    
    // The component only opens the last section when multiple sections have been clicked.
    it('The component opens the last section clicked', () => {
        const wrapper = shallow(<Accordian sections={sections}/>)
        wrapper.find('button').at(0).simulate('click')
        wrapper.find('button').at(1).simulate('click')
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})