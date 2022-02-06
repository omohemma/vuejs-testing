import { mount } from "@vue/test-utils";
import LoginForm from "@/components/LoginForm";

describe("LoginForm", () => {
  test("emits an event with a user data payload", () => {
    const wrapper = mount(LoginForm);
    // 1. Find text input
    // const input = wrapper.find("input[type='text']");
    const input = wrapper.find("[data-test-id='name-input']");

    // 2. Set value for text input
    input.setValue("Omololu Emmanuel");

    // 3. Simulate form submission
    // wrapper.find("button").trigger("click");
    wrapper.trigger("submit");

    // 4. Assert event has been emitted
    const formSubmissionEmittedCalls = wrapper.emitted("formSubmitted");
    expect(formSubmissionEmittedCalls).toHaveLength(1);

    // 5. Assert payload is correct
    const expectedPaylod = { name: "Omololu Emmanuel" };
    expect(formSubmissionEmittedCalls[0][0]).toMatchObject(expectedPaylod);
  });
});
