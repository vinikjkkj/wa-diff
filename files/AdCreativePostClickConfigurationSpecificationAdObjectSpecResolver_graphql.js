__d(
  "AdCreativePostClickConfigurationSpecificationAdObjectSpecResolver.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: { vultureHash: "TJ8_gG1L4nrihtJ5EmvwTOnFOno=" },
      name: "AdCreativePostClickConfigurationSpecificationAdObjectSpecResolver",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "post_click_item_description",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "post_click_item_headline",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          concreteType: "AdCreativeLinkDataImageOverlaySpecification",
          kind: "LinkedField",
          name: "image_overlay_spec",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "custom_text_type",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "float_with_margin",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "overlay_template",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "position",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "text_font",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "text_template_tags",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "text_type",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "theme_color",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
      type: "AdCreativePostClickConfigurationSpecification",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
