__d(
  "GroupsCometAAV5Utils",
  [
    "CometTextWithEntities.react",
    "GroupsCometAAV5HighlightRenderer.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = function (t, n) {
        if (n.type === "INT" && n.intInput != null) {
          var e = n.intInput.toString(),
            o = t.toString(),
            a = o.indexOf("#");
          return a < 0
            ? t
            : s.jsx(r("CometTextWithEntities.react"), {
                ranges: [
                  {
                    entity: { __typename: "Inline", inline_style: "BOLD" },
                    length: e.length,
                    offset: a,
                  },
                ],
                renderers: {
                  Inline: [r("GroupsCometAAV5HighlightRenderer.react")],
                },
                text: o.replace(/#/, e),
              });
        }
        return t;
      },
      c = function (t, n) {
        return t == null ? void 0 : t.toString().replace(/#/, n.toString());
      },
      d = function (t, n, r) {
        if (
          t.renderer$key == null ||
          t.type === "USER_VERIFIED_EMAIL_ADDRESS" ||
          t.type === "PAID_CONTENT_PURCHASER" ||
          t.type === "GROUP_USER_POSTING_FOR_FIRST_TIME" ||
          t.type === "CORRECTLY_ANSWERED_MEMBERSHIP_QUESTIONS"
        )
          return !1;
        if (t.type === "CONTENT_NEW_MEMBER_JOINS_EVENT_BASED_WELCOME_POST") {
          var e = t.input;
          if (e.type === "INT")
            return (
              e.intInput == null ||
              e.intInput > 300 ||
              e.intInput < 1 ||
              !Number.isInteger(e.intInput)
            );
        }
        if (r != null && r.length === 0) return !0;
        if (n != null && n.length > 0)
          return n.some(function (e) {
            var t, n;
            return (
              ((t = (n = e.post_id) != null ? n : e.text) != null
                ? t
                : ""
              ).trim().length === 0
            );
          });
        var o = t.input;
        switch (o.type) {
          case "NO_INPUT":
            return !0;
          case "ARRAY_OF_STRING":
            return (function (e) {
              var t = (e = o.stringArrayInput) != null ? e : [];
              return t.length === 0 || (t.length === 1 && t[0] === "false");
            })();
          case "STRING":
            return o.stringInput === "[]";
          default:
            return !1;
        }
      },
      m = function (t) {
        return (
          t == null ||
          t.type === "NO_OPERATION" ||
          t.type === "NULL_ACTION_FOR_REPORTABLE"
        );
      },
      p = function (t) {
        return (
          (t == null ? void 0 : t.type) ===
            "ACCEPT_VERIFIED_EMAIL_PARTICIPATION_REQUEST" ||
          (t == null ? void 0 : t.type) ===
            "ACCEPT_VERIFIED_EMAIL_MEMBER_REQUEST"
        );
      };
    ((l.substituteNumberInInputState = u),
      (l.substituteNumberInFbt = c),
      (l.shouldDisableSaveCondition = d),
      (l.isActionEmpty = m),
      (l.isEmailVerificationAction = p));
  },
  98,
);
