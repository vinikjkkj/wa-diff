__d(
  "getFeatureDefinition",
  [
    "CometComposerAttachmentPluginTypes",
    "CometComposerTaggerPluginTypes",
    "getActiveAttachmentFeatureDefinition",
    "getTaggerFeatureDefinitionByName",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n,
        o = e.attachments,
        a = Object.keys(r("CometComposerAttachmentPluginTypes")).find(
          function (e) {
            return e === t;
          },
        ),
        i =
          a != null
            ? r("getActiveAttachmentFeatureDefinition")(o != null ? o : [], a)
            : null,
        l = Object.keys(r("CometComposerTaggerPluginTypes")).find(function (e) {
          return e === t;
        }),
        s =
          l != null
            ? r("getTaggerFeatureDefinitionByName")(
                (n = e.taggers) != null ? n : [],
                l,
              )
            : null;
      return { attachmentData: i, taggerData: s };
    }
    l.default = e;
  },
  98,
);
