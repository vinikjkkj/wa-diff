__d(
  "MAIBACreativeSelectionActions",
  [
    "fbt",
    "MAIBAChatUserMessageCreativeReference.react",
    "MAIBACreativeSelectionUtils",
    "MAIBADisambiguationOptionSends",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e) {
      return "compass_duplicate_ad-" + e.join("_");
    }
    function u(e) {
      return e == null ? "" : " Source ad: " + e + ".";
    }
    function c(e) {
      return e
        .filter(function (e) {
          return e.mediaType === "IMAGE";
        })
        .map(function (e) {
          return {
            maiba_internal_kind: "ADS_AUTO_CREATIVE",
            media_id: e.creativeID,
            media_type: "MAIBA_INTERNAL",
            media_url: e.imageURL,
          };
        });
    }
    function d() {
      return String(s._(/*BTDS*/ ""));
    }
    function m(e) {
      if (e == null) return "";
      var t = e.ideaID,
        n = e.ideaTitle,
        r = e.unitID;
      return (
        (r != null && r !== "" ? " Compass insight unit: " + r + "." : "") +
        (t != null && t !== "" ? " Compass idea: " + t + "." : "") +
        (n != null && n !== "" ? " Idea title: " + n : "")
      );
    }
    function p(t, n, r, a, i, l, s) {
      var p = function (t, o, a) {
          i(
            babelHelpers.extends(
              {
                displayMessage: o,
                externalConversationId: n != null ? n : void 0,
                isSentFromOutOfChat: !1,
                message: t,
                originComponent: r,
              },
              a != null && a.length > 0 ? { userMediaAttachments: a } : {},
            ),
          );
        },
        _ = o("MAIBACreativeSelectionUtils").getSelectedCreatives(t, a),
        f = o("MAIBACreativeSelectionUtils").getSelectedImageURLs(t, a),
        g = o("MAIBACreativeSelectionUtils").getSelectedAdgroupID(t, a),
        h = (function (e) {
          if (e == null || e === "") return g;
          {
            var t = e;
            if (g == null || t === g) return t;
          }
          return null;
        })(l),
        y =
          f.length === 0
            ? "Preview ad and publish"
            : "Preview ad and publish. Image URLs: " +
              f.join(", ") +
              "." +
              u(h) +
              ((s == null ? void 0 : s.unitID) != null
                ? " Compass insight unit: " + s.unitID + "."
                : "") +
              ((s == null ? void 0 : s.ideaID) != null
                ? " Compass idea: " + s.ideaID + "."
                : ""),
        C = o(
          "MAIBAChatUserMessageCreativeReference.react",
        ).getMAIBACompassDuplicateAdBubble(),
        b = function () {
          p(y, C, c(_));
        },
        v = function () {
          var t = _.map(function (e) {
            return e.creativeID;
          });
          (t.length > 0 &&
            o(
              "MAIBADisambiguationOptionSends",
            ).registerMAIBADisambiguationOptionSend(n, e(t), {
              displayMessage: C,
              message: y,
              userMediaAttachments: c(_),
            }),
            p(
              "Save to media library: Creative IDs: " +
                t.join(", ") +
                ". " +
                ("Image URLs: " + f.join(", ") + ".") +
                u(h) +
                m(s),
              d(),
              c(_),
            ));
        };
      return { onPreviewAndPublish: b, onSaveToMediaLibrary: v };
    }
    ((l.compassSavedDuplicateOptionID = e),
      (l.selectedImageAttachments = c),
      (l.saveToMediaLibraryBubble = d),
      (l.compassExportContextSuffix = m),
      (l.useMAIBACreativeSelectionActions = p));
  },
  226,
);
