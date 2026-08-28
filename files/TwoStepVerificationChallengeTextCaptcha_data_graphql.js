__d(
  "TwoStepVerificationChallengeTextCaptcha_data.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [{ kind: "RootArgument", name: "encryptedContext" }],
      kind: "Fragment",
      metadata: null,
      name: "TwoStepVerificationChallengeTextCaptcha_data",
      selections: [
        {
          kind: "RequiredField",
          field: {
            alias: null,
            args: null,
            concreteType: "XFBTwoStepVerificationContent",
            kind: "LinkedField",
            name: "xfb_two_factor_login_content",
            plural: !1,
            selections: [
              {
                kind: "RequiredField",
                field: {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "text_captcha_cant_read_text",
                  storageKey: null,
                },
                action: "THROW",
                path: "xfb_two_factor_login_content.text_captcha_cant_read_text",
              },
              {
                kind: "RequiredField",
                field: {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "text_captcha_empty_error_input_message",
                  storageKey: null,
                },
                action: "THROW",
                path: "xfb_two_factor_login_content.text_captcha_empty_error_input_message",
              },
              {
                kind: "RequiredField",
                field: {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "text_captcha_hear_code_label",
                  storageKey: null,
                },
                action: "THROW",
                path: "xfb_two_factor_login_content.text_captcha_hear_code_label",
              },
              {
                kind: "RequiredField",
                field: {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "text_captcha_input_label",
                  storageKey: null,
                },
                action: "THROW",
                path: "xfb_two_factor_login_content.text_captcha_input_label",
              },
              {
                kind: "RequiredField",
                field: {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "text_captcha_label_for_new_code",
                  storageKey: null,
                },
                action: "THROW",
                path: "xfb_two_factor_login_content.text_captcha_label_for_new_code",
              },
              {
                kind: "RequiredField",
                field: {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "text_captcha_or_separator",
                  storageKey: null,
                },
                action: "THROW",
                path: "xfb_two_factor_login_content.text_captcha_or_separator",
              },
            ],
            storageKey: null,
          },
          action: "THROW",
          path: "xfb_two_factor_login_content",
        },
        {
          kind: "RequiredField",
          field: {
            alias: null,
            args: [
              {
                kind: "Variable",
                name: "encrypted_context",
                variableName: "encryptedContext",
              },
            ],
            concreteType: "XFBTextCaptchaDetails",
            kind: "LinkedField",
            name: "xfb_pre_authentication_captcha_details",
            plural: !1,
            selections: [
              {
                kind: "RequiredField",
                field: {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "captcha_audio_uri",
                  storageKey: null,
                },
                action: "THROW",
                path: "xfb_pre_authentication_captcha_details.captcha_audio_uri",
              },
              {
                kind: "RequiredField",
                field: {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "captcha_persist_data",
                  storageKey: null,
                },
                action: "THROW",
                path: "xfb_pre_authentication_captcha_details.captcha_persist_data",
              },
              {
                kind: "RequiredField",
                field: {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "text_captcha_image_uri",
                  storageKey: null,
                },
                action: "THROW",
                path: "xfb_pre_authentication_captcha_details.text_captcha_image_uri",
              },
            ],
            storageKey: null,
          },
          action: "THROW",
          path: "xfb_pre_authentication_captcha_details",
        },
      ],
      type: "Query",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
