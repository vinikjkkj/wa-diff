__d(
  "EBMinosBridgedAPIHandler",
  ["EBAPI"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      writeMinosKeyChangeAdminMessage: function () {
        return r("EBAPI").writeMinosKeyChangeAdminMessage.apply(
          r("EBAPI"),
          arguments,
        );
      },
      writeMinosMailboxKeysForRecipientAPI: function () {
        return r("EBAPI").writeMinosMailboxKeysForRecipientAPI.apply(
          r("EBAPI"),
          arguments,
        );
      },
      writeMinosSecureStorageAlert: function () {
        return r("EBAPI").writeMinosSecureStorageAlert.apply(
          r("EBAPI"),
          arguments,
        );
      },
    };
    l.minosEBAPI = e;
  },
  98,
);
