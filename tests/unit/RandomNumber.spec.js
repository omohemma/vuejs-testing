import { mount } from "@vue/test-utils";
import RandomNumber from "@/components/RandomNumber";

describe("RandomNumber", () => {
  test("By default, randomNumber data value should be 0", () => {
    const wrapper = mount(RandomNumber);
    expect(wrapper.html()).toContain("<span>0</span>");
  });

  test("If button is clicked, randomNumber should be between 1 and 10", async () => {
    // Mount Component
    const wrapper = mount(RandomNumber);

    // Trigger click event
    wrapper.find("button").trigger("click");

    // Wait till trigger event is effected
    await wrapper.vm.$nextTick();

    // find the number generated by method rendered in DOM element and convert to Integer
    const randomNumber = parseInt(wrapper.find("span").element.textContent);

    // assert based on props min and max
    expect(randomNumber).toBeGreaterThanOrEqual(1);
    expect(randomNumber).toBeLessThanOrEqual(10);
  });

  test("If button is clicked, randomNumber should be between 200 and 300", async () => {
    // Mount Component and set PropsData
    const wrapper = mount(RandomNumber, {
      propsData: {
        min: 200,
        max: 300,
      },
    });

    // Set props Min to be 200 and Max 300
    // wrapper.setProps({
    //   min: 200,
    //   max: 300,
    // }); - My Guess

    // Trigger click event
    wrapper.find("button").trigger("click");

    // Wait till trigger event is effected
    await wrapper.vm.$nextTick();

    // find the number generated by method rendered in DOM element and convert to Integer
    const randomNumber = parseInt(wrapper.find("span").element.textContent);

    // assert based on props min and max
    expect(randomNumber).toBeGreaterThanOrEqual(200);
    expect(randomNumber).toBeLessThanOrEqual(300);
  });
});
