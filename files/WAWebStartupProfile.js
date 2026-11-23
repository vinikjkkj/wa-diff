__d(
  "WAWebStartupProfile",
  [
    "WALogger",
    "WAWebApiContact",
    "WAWebUserPrefsGeneral",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsStartupProfilePhoto",
    "WAWebUsernameTypes",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = null,
      c = !1;
    function d() {
      if (u == null) {
        var e = o("WAWebUserPrefsGeneral").getPushname();
        if (!(e == null || e === "")) {
          u = { name: e, username: null, photo: null };
          var t = o(
            "WAWebUserPrefsStartupProfilePhoto",
          ).getUsableStartupProfilePhotoUrl();
          t != null &&
            f(t).then(function (e) {
              e != null &&
                u != null &&
                (u = babelHelpers.extends({}, u, { photo: e }));
            });
        }
      }
    }
    async function m() {
      if ((d(), !(c || u == null))) {
        c = !0;
        var e = await _();
        e != null &&
          u != null &&
          (u = babelHelpers.extends({}, u, { username: e }));
      }
    }
    function p() {
      return u;
    }
    async function _() {
      try {
        var e,
          t =
            (e = o("WAWebUserPrefsMeUser").getMaybeMeLidUser()) != null
              ? e
              : o("WAWebUserPrefsMeUser").getMaybeMePnUser();
        if (t == null) return null;
        var n = await o("WAWebApiContact").getContactRecord(t),
          r = n == null ? void 0 : n.username;
        return o("WAWebUsernameTypes").isPresentUsername(r) &&
          (n == null ? void 0 : n.usernameSoftDeleted) !== !0
          ? o("WAWebUsernameTypes").serializeUsername(r)
          : null;
      } catch (e) {
        return g(e);
      }
    }
    async function f(t) {
      var n = new Image();
      n.src = t;
      try {
        return (await n.decode(), n);
      } catch (t) {
        return (
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[startup-profile] failed to decode the saved own photo",
                ])),
            )
            .catching(r("getErrorSafe")(t)),
          null
        );
      }
    }
    function g(e) {
      return (
        o("WALogger")
          .WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[startup-profile] failed to read the own username",
              ])),
          )
          .catching(r("getErrorSafe")(e)),
        null
      );
    }
    ((l.preloadStartupProfile = d),
      (l.readStartupProfileUsername = m),
      (l.getPreparedStartupProfile = p));
  },
  98,
);
