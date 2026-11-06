__d(
  "WAWebGenerateVcardMessageProto",
  ["WAWebEncodeBusinessInteractionPills"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.contextInfo,
        n = e.json,
        r = e.msgContext,
        a = r === "quoted" ? null : n.businessInteractionPills;
      return {
        contactMessage: {
          displayName: n.vcardFormattedName,
          vcard: n.body,
          contextInfo:
            a != null
              ? babelHelpers.extends({}, t, {
                  businessInteractionPills: o(
                    "WAWebEncodeBusinessInteractionPills",
                  ).encodeContactCardPills(a),
                })
              : t,
        },
      };
    }
    l.default = e;
  },
  98,
);
