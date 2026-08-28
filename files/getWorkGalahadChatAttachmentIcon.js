__d(
  "getWorkGalahadChatAttachmentIcon",
  ["ix", "MercuryAttachment"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e) {
      var t = r("MercuryAttachment").getAttachTypeByMime(e);
      switch (t) {
        case "attach:image":
          return s("1069404");
        case "attach:video":
          return s("1069431");
        case "attach:music":
          return s("1069422");
        case "attach:voice":
          return s("1069422");
        case "attach:text":
          return s("1069428");
        case "attach:pdf":
          return s("1069407");
        case "attach:richtext":
          return s("1069419");
        case "attach:spreadsheet":
          return s("1069425");
        case "attach:presentation":
          return s("1069413");
        case "attach:archive":
          return s("1069386");
        case "attach:ms:word":
          return s("1069434");
        case "attach:ms:xls":
          return s("1069389");
        case "attach:ms:ppt":
          return s("1069410");
        default:
          return s("1069392");
      }
    }
    l.default = e;
  },
  98,
);
