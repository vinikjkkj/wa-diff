__d(
  "WAWebGenerateVcardMessageProto",
  [],
  function (t, n, r, o, a, i) {
    function e(e) {
      var t = e.contextInfo,
        n = e.json;
      return {
        contactMessage: {
          displayName: n.vcardFormattedName,
          vcard: n.body,
          contextInfo: t,
        },
      };
    }
    i.default = e;
  },
  66,
);
