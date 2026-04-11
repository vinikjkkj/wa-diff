__d(
  "WAWebShopsLog",
  ["WAWebConnModel", "WAWebUserPrefsMeUser", "WAWebWaShopsManagementWamEvent"],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = o("WAWebConnModel").Conn.isSMB
        ? o("WAWebUserPrefsMeUser").getMaybeMePnUser()
        : void 0;
      return e == null ? void 0 : e.user;
    }
    function s(t, n) {
      var r = n != null ? n : {},
        a = r.isShopsProductPreviewVisible,
        i = r.shouldLogJid,
        l = i === void 0 ? !0 : i,
        s = new (o("WAWebWaShopsManagementWamEvent").WaShopsManagementWamEvent)(
          {
            isShopsProductPreviewVisible: a,
            shopsManagementAction: t,
            shopsSellerJid: l ? e() : void 0,
          },
        );
      s.commit();
    }
    l.logShopsManagementEvent = s;
  },
  98,
);
