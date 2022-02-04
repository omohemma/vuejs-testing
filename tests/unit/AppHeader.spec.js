// This Block of code describe the test suites for AppHeader
import { mount } from "@vue/test-utils";
import AppHeader from "@/components/AppHeader";

describe("AppHeader", () => {
  test("If user is not logged in, do not show logout button", () => {
    const wrapper = mount(AppHeader);
    expect(wrapper.find("button").isVisible()).toBe(false);
  });

  test("if a user is logged in, show the logout button", async () => {
    // Mount Component for Testing with Vue-test-utils
    const wrapper = mount(AppHeader);
    //Set isLoggedIn as true
    wrapper.setData({
      loggedIn: true,
    });
    // SetData before making assertion
    await wrapper.vm.$nextTick();
    expect(wrapper.find("button").isVisible()).toBe(true);
  });
});
