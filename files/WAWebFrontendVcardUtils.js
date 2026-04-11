__d(
  "WAWebFrontendVcardUtils",
  [
    "WALogger",
    "WAWebApiContact",
    "WAWebContactGetters",
    "WAWebFrontendContactGetters",
    "WAWebUserPrefsMeUser",
    "WAWebWid",
    "WAWebWidFactory",
    "WAWebWidFormat",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return r("isStringNullOrEmpty")(e)
        ? ""
        : e.replace(/\\/g, "\\\\").replace(/;/g, "\\;").replace(/,/g, "\\,");
    }
    function u(e) {
      var t, n;
      if (o("WAWebUserPrefsMeUser").isMeAccount(e.id))
        t =
          o("WAWebContactGetters").getName(e) ||
          o("WAWebFrontendContactGetters").getDisplayName(e);
      else {
        var a = o("WAWebFrontendContactGetters")
          .getFormattedName(e)
          .split(o("WAWebFrontendContactGetters").getFormattedShortName(e))
          .filter(Boolean);
        ((n = a.length ? a[0].trim() : void 0),
          (t = r("isStringNullOrEmpty")(n)
            ? o("WAWebFrontendContactGetters").getFormattedName(e)
            : o("WAWebFrontendContactGetters").getFormattedShortName(e)));
      }
      return s(n) + ";" + s(t) + ";;;";
    }
    function c(t, n) {
      var a, i, l, c, d;
      o("WAWebUserPrefsMeUser").isMeAccount(t.id)
        ? (d =
            o("WAWebContactGetters").getName(t) ||
            o("WAWebFrontendContactGetters").getDisplayName(t))
        : (d = o("WAWebFrontendContactGetters").getDisplayName(t));
      var m = s(d),
        p = o("WAWebFrontendContactGetters").getUsername(t),
        _ = o("WAWebContactGetters").getId(t),
        f = (a = n == null ? void 0 : n.includePhoneNumber) != null ? a : !0,
        g = (i = n == null ? void 0 : n.includeUsername) != null ? i : !0,
        h = [];
      if (f) {
        var y = _.isRegularUserPn()
          ? _
          : o("WAWebApiContact").getPhoneNumber(
              o("WAWebWidFactory").asUserLidOrThrow(_),
            );
        y &&
          (h = [
            "TEL;type=CELL;waid=" +
              String(r("WAWebWid").user(y)) +
              ":" +
              o("WAWebWidFormat").widToFormattedUser(y),
          ]);
      }
      var C = [];
      if (!r("isStringNullOrEmpty")(p) && g) {
        var b = _.isLid()
          ? _
          : o("WAWebApiContact").getCurrentLid(
              o("WAWebWidFactory").asUserWidOrThrow(_),
            );
        b && (C = ["X-WA-LID:" + String(r("WAWebWid").user(b))]);
      }
      var v = [].concat(h, C);
      v.length === 0 &&
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "vcardFromContactModel: no phone number or username",
              ])),
          )
          .sendLogs("vcard-no-phone-number-or-username", { sampling: 0.01 });
      var S = (l = t.businessProfile) == null ? void 0 : l.automatedType,
        R = ["BEGIN:VCARD", "VERSION:3.0", "N:" + u(t), "FN:" + m]
          .concat(v, [
            t.isBusiness ? "X-WA-BIZ-NAME:" + m : null,
            r("isStringNullOrEmpty")(
              (c = t.businessProfile) == null ? void 0 : c.description,
            )
              ? null
              : "X-WA-BIZ-DESCRIPTION:" + s(t.businessProfile.description),
            S ? "X-WA-BIZ-AUTOMATED-TYPE:" + s(String(S)) : null,
            "END:VCARD",
          ])
          .filter(Boolean);
      return { displayName: m, vcard: R.join("\n"), isMultiVcard: !1 };
    }
    l.vcardFromContactModel = c;
  },
  98,
);
