__d(
  "WAWebBizBroadcastsManageAudienceListCreationSuccessPanel.react",
  ["fbt", "WDSText.react", "react"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t,
        n = e.broadcastListName,
        o = e.broadcastListRecipientCount;
      return u.jsxs("div", {
        className: "x78zum5 xdt5ytf x1f0uite xs2akgl xl7twdi",
        children: [
          u.jsx((t = r("WDSText.react")), {
            type: "Headline1",
            colorName: "contentDefault",
            children: s._(/*BTDS*/ "Your new broadcast audience is ready"),
          }),
          u.jsx(t, {
            type: "Body2",
            colorName: "contentDeemphasized",
            children: s._(
              /*BTDS*/ "Open your phone to create and send a business broadcast to your new audience.",
            ),
          }),
          u.jsxs("div", {
            className:
              "x1ucmu8n xyi3aci xwf5gio x1p453bz x1suzm8a xscbp6u xb0esv5 xyo0t3i x1xrf6ya",
            children: [
              u.jsx(t, {
                type: "Body1",
                colorName: "contentDefault",
                children: n,
              }),
              u.jsx(t, {
                type: "Body2",
                colorName: "contentDefault",
                children: s._(
                  /*BTDS*/ '_j{"*":"{number_of_recipients} recipients","_1":"1 recipient"}',
                  [s._plural(o, "number_of_recipients")],
                ),
              }),
            ],
          }),
        ],
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
