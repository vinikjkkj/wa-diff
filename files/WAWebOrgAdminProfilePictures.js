__d(
  "WAWebOrgAdminProfilePictures",
  [
    "WALogger",
    "WAWebBackendErrors",
    "WAWebContactSyncPrivacyHints",
    "WAWebGetProfilePicJob",
    "WAWebUsync",
    "WAWebUsyncUser",
    "WAWebWidFactory",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    async function d(t) {
      var n = Array.from(new Set(t));
      if (n.length === 0)
        return {
          profilePictureURLByLID: new Map(),
          unavailableLIDs: new Set(),
        };
      try {
        var a,
          i = new Map(),
          l = new Set(),
          d = new (o("WAWebUsync").USyncQuery)()
            .withContext("interactive")
            .withMode("query")
            .withPictureProtocol(),
          p = 0,
          _ = [];
        for (var f of n)
          try {
            var g = o("WAWebWidFactory").createUserLidOrThrow(f, "lid");
            i.set(g.toString(), f);
            var h = new (o("WAWebUsyncUser").USyncUser)().withId(g);
            (_.push({ user: h, wid: g }), d.withUser(h));
          } catch (e) {
            (p++, l.add(f));
          }
        if (
          (p > 0 &&
            o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[org_admin] skipped ",
                    " invalid member LIDs",
                  ])),
                p,
              )
              .sendLogs("org-admin-profile-picture-invalid-lids"),
          i.size === 0)
        )
          return { profilePictureURLByLID: new Map(), unavailableLIDs: l };
        await o("WAWebContactSyncPrivacyHints").attachUsyncPrivacyHints(_);
        var y = await d.execute(),
          C = (a = y.error.all) != null ? a : y.error.picture;
        if (C != null)
          throw (
            o("WALogger")
              .WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[org_admin] profile picture USync returned ",
                    "",
                  ])),
                C.errorCode,
              )
              .sendLogs("org-admin-profile-picture-usync-error"),
            r("err")("Organization member profile picture USync failed")
          );
        var b = new Map();
        return (
          await Promise.all(
            y.list.map(async function (e) {
              var t = e.id,
                n = t == null ? null : i.get(t.toString());
              if (n != null) {
                var a = e.picture;
                if (typeof (a == null ? void 0 : a.id) != "number") {
                  (a == null || m(a.errorCode)) && l.add(n);
                  return;
                }
                try {
                  var s = await o("WAWebGetProfilePicJob").getProfilePic(t, {
                      preview: !0,
                    }),
                    c = s.eurl;
                  c === "" ? l.add(n) : b.set(n, c);
                } catch (e) {
                  e instanceof o("WAWebBackendErrors").ServerStatusCodeError &&
                  m(e.status)
                    ? l.add(n)
                    : o("WALogger")
                        .ERROR(
                          u ||
                            (u = babelHelpers.taggedTemplateLiteralLoose([
                              "[org_admin] failed to resolve member profile picture",
                            ])),
                        )
                        .catching(r("getErrorSafe")(e))
                        .sendLogs("org-admin-profile-picture-fetch-failed");
                }
              }
            }),
          ),
          { profilePictureURLByLID: b, unavailableLIDs: l }
        );
      } catch (e) {
        var v = r("getErrorSafe")(e);
        throw (
          o("WALogger")
            .ERROR(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[org_admin] failed to fetch member profile picture metadata",
                ])),
            )
            .catching(v)
            .sendLogs("org-admin-profile-picture-usync-failed"),
          v
        );
      }
    }
    function m(e) {
      return e === 401 || e === 404;
    }
    l.fetchOrgAdminProfilePictures = d;
  },
  98,
);
