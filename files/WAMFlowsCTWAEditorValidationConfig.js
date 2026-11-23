__d(
  "WAMFlowsCTWAEditorValidationConfig",
  ["WAMFlowsHSMValidationConfig"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = babelHelpers.extends(
        {},
        (e = o("WAMFlowsHSMValidationConfig")).WAM_FLOWS_HSM_VALIDATION_CONFIG,
        {
          COMPONENT: babelHelpers.extends(
            {},
            e.WAM_FLOWS_HSM_VALIDATION_CONFIG.COMPONENT,
            { maxNumberOfComponents: 10, numberOfFixedComponents: 2 },
          ),
          RadioButtonsGroup: babelHelpers.extends(
            {},
            e.WAM_FLOWS_HSM_VALIDATION_CONFIG.RadioButtonsGroup,
            { maxOptions: 30 },
          ),
          TextArea: babelHelpers.extends(
            {},
            e.WAM_FLOWS_HSM_VALIDATION_CONFIG.TextArea,
            { maxLabel: 150 },
          ),
          TextInput: babelHelpers.extends(
            {},
            e.WAM_FLOWS_HSM_VALIDATION_CONFIG.TextInput,
            { maxLabel: 80 },
          ),
        },
      );
    l.WAM_FLOWS_CTWA_VALIDATION_CONFIG = s;
  },
  98,
);
