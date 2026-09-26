__d(
  "GroupsCometAAV5FeedbackInputUtils",
  [
    "FBLogger",
    "GroupAdminAssistantFeedbackType",
    "GroupsCometAAV5InputStateReducer",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = { message: "", type: "none" },
      s = function (n) {
        return n.type !== e.type;
      },
      u = function (n, r) {
        return n
          ? r.length === 0
            ? "share_requirements"
            : "share_custom"
          : e.type;
      },
      c = function (n) {
        if (n == null) return e;
        var t = n.stringInput;
        if (n.type !== "STRING" || r("isStringNullOrEmpty")(t)) return e;
        var o = null;
        try {
          o = JSON.parse(t);
        } catch (n) {
          return (
            r("FBLogger")("groups_comet").mustfix(
              'Failed to parse feedback input: "%s',
              t,
            ),
            e
          );
        }
        if (typeof o != "object") return e;
        var a = r("GroupAdminAssistantFeedbackType").cast(o.type);
        if (a == null) return e;
        var i = o.message;
        return { message: typeof i == "string" ? i : "", type: a };
      },
      d = function (t, n) {
        return o("GroupsCometAAV5InputStateReducer").inputReducer(n, {
          type: "UPDATE_INPUT",
          updates: { stringInput: JSON.stringify(t), type: "STRING" },
        });
      };
    ((l.NO_FEEDBACK = e),
      (l.hasFeedback = s),
      (l.getFeedbackType = u),
      (l.parseFeedbackInputFromInputState = c),
      (l.convertFeedbackInputToInputState = d));
  },
  98,
);
