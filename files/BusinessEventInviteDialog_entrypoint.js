__d(
  "BusinessEventInviteDialog.entrypoint",
  ["BusinessEventInviteDialogQuery$Parameters", "JSResourceForInteraction"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["actorID"],
      s = {
        getPreloadProps: function (r) {
          var t = r.actorID,
            o = babelHelpers.objectWithoutPropertiesLoose(r, e);
          return {
            queries: {
              queryReference: {
                environmentProviderOptions: { actorID: t },
                parameters: n("BusinessEventInviteDialogQuery$Parameters"),
                variables: o,
              },
            },
          };
        },
        root: r("JSResourceForInteraction")(
          "BusinessEventInviteDialog.react",
        ).__setRef("BusinessEventInviteDialog.entrypoint"),
      };
    l.default = s;
  },
  98,
);
