__d(
  "createTagDeeplinkTapLoggingRenderer",
  [
    "CometLinkedEntityRenderer",
    "FbTagDetailsSheetDeeplinkTapFalcoEvent",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      return function (t, n, o, a, i) {
        var l = r("CometLinkedEntityRenderer")(t, n, o, a, i),
          u = function () {
            var t = n.should_prioritize_ig_display_name === !0,
              o;
            (t
              ? (o = "ig_display_name")
              : n.username == null
                ? (o = "fb_name")
                : (o = "ig_username"),
              r("FbTagDetailsSheetDeeplinkTapFalcoEvent").log(function () {
                return {
                  display_name_shown: t,
                  event: "fb_tag_details_sheet_deeplink_tap",
                  post_id: e.postId,
                  surface: e.surface,
                  tag_type: o,
                };
              }));
          };
        return s.jsx("span", { onClickCapture: u, children: l });
      };
    }
    l.default = u;
  },
  98,
);
