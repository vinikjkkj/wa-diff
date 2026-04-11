__d(
  "WAWebGenerateMultiVcardMessageProto",
  [],
  function (t, n, r, o, a, i) {
    function e(e) {
      var t = e.contextInfo,
        n = e.json;
      return {
        contactsArrayMessage: {
          contacts: n.vcardList.map(function (e) {
            return e;
          }),
          contextInfo: t,
        },
      };
    }
    i.default = e;
  },
  66,
);
