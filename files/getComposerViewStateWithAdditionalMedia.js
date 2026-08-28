__d(
  "getComposerViewStateWithAdditionalMedia",
  ["CometComposerAttachmentPluginTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.draftViewState,
        n = e.entryPointData,
        o = e.getResumableViewState,
        a = e.startWithHeaderTextStyle,
        i;
      if (t != null) {
        var l,
          s,
          u = [].concat(
            (l = t.mediaAttachments) != null ? l : [],
            (s = n == null ? void 0 : n.additionalMediaAttachmentItems) != null
              ? s
              : [],
          );
        u.length > 0
          ? (i = babelHelpers.extends({}, t, {
              attachmentArea: {
                activeAttachmentType: r("CometComposerAttachmentPluginTypes")
                  .MEDIA,
              },
              mediaAttachments: u,
            }))
          : (i = babelHelpers.extends({}, t));
      } else
        i = o(n == null ? void 0 : n.additionalMediaAttachmentItems, {
          startWithHeaderTextStyle: a,
        });
      return i;
    }
    l.default = e;
  },
  98,
);
