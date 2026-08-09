__d(
  "MAWFolderUtils",
  [
    "FBLogger",
    "I64",
    "LSCoreClientFolderType",
    "LSIntEnum",
    "MAWFolderTypes",
    "MessagingFolderTag",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(e) {
      switch (e) {
        case o("MAWFolderTypes").PENDING:
          return r("MessagingFolderTag").PENDING;
        case o("MAWFolderTypes").OTHER:
          return r("MessagingFolderTag").OTHER;
        case o("MAWFolderTypes").SPAM:
          return r("MessagingFolderTag").SPAM;
        case o("MAWFolderTypes").ARCHIVED:
          return r("MessagingFolderTag").UNKNOWN;
        default:
          return r("MessagingFolderTag").INBOX;
      }
    }
    function c(t) {
      switch (t) {
        case o("MAWFolderTypes").ARCHIVED:
          return (e || (e = o("LSIntEnum"))).ofNumber(
            r("LSCoreClientFolderType").ARCHIVED,
          );
        case o("MAWFolderTypes").INBOX:
          return (e || (e = o("LSIntEnum"))).ofNumber(
            r("LSCoreClientFolderType").INBOX,
          );
        case o("MAWFolderTypes").OTHER:
          return (e || (e = o("LSIntEnum"))).ofNumber(
            r("LSCoreClientFolderType").SPAM,
          );
        case o("MAWFolderTypes").PENDING:
          return (e || (e = o("LSIntEnum"))).ofNumber(
            r("LSCoreClientFolderType").OTHER,
          );
        case o("MAWFolderTypes").RESTRICTED:
          return (e || (e = o("LSIntEnum"))).ofNumber(
            r("LSCoreClientFolderType").RESTRICTED,
          );
        case o("MAWFolderTypes").SPAM:
          return (e || (e = o("LSIntEnum"))).ofNumber(
            r("LSCoreClientFolderType").PENDING,
          );
        default:
          throw r("FBLogger")("messenger_web").mustfixThrow(
            "Unhandled folder ID: " + t,
          );
      }
    }
    function d(e) {
      switch ((s || (s = o("I64"))).to_int32(e)) {
        case o("MAWFolderTypes").FOLDER_ID.INBOX:
          return 0;
        case o("MAWFolderTypes").FOLDER_ID.PENDING:
          return -1;
        case o("MAWFolderTypes").FOLDER_ID.SPAM:
          return -3;
        case o("MAWFolderTypes").FOLDER_ID.ARCHIVED:
          return -10;
        case o("MAWFolderTypes").FOLDER_ID.OTHER:
          return -2;
        default:
          return null;
      }
    }
    ((l.getMessagingFolderTag = u),
      (l.systemFolderToLSCoreClientFolder = c),
      (l.parentThreadKeyToLsSystemFolder = d));
  },
  98,
);
