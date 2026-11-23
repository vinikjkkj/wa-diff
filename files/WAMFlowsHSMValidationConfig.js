__d(
  "WAMFlowsHSMValidationConfig",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e,
      l =
        ((e = {}),
        (e.TextHeading = { maxText: 80 }),
        (e.TextSubheading = { maxText: 80 }),
        (e.TextBody = { maxText: 4096 }),
        (e.TextCaption = { maxText: 4096 }),
        (e.TextInput = { maxHelperText: 80, maxLabel: 20 }),
        (e.TextArea = { maxHelperText: 80, maxLabel: 20 }),
        (e.DatePicker = { maxHelperText: 80, maxLabel: 20 }),
        (e.RadioButtonsGroup = {
          maxLabel: 30,
          maxOptionLabel: 30,
          maxOptions: 10,
          minOptions: 2,
        }),
        (e.CheckboxGroup = {
          maxLabel: 30,
          maxOptionLabel: 30,
          maxOptions: 10,
          minOptions: 1,
        }),
        (e.Dropdown = {
          maxLabel: 20,
          maxOptionLabel: 80,
          maxOptions: 30,
          minOptions: 1,
        }),
        (e.OptIn = { maxLabel: 300, maxNumberOfComponentsPerScreen: 5 }),
        (e.Image = {
          maxFileSize: 300,
          maxImagesPerScreen: 3,
          minHeightSize: 1,
          minWidthSize: 1,
        }),
        (e.BUTTON = { maxCTALabel: 30 }),
        (e.COMPONENT = {
          maxNumberOfComponents: 8,
          numberOfFixedComponents: 0,
        }),
        (e.SCREEN = { maxNumberOfScreens: 8 }),
        e);
    i.WAM_FLOWS_HSM_VALIDATION_CONFIG = l;
  },
  66,
);
