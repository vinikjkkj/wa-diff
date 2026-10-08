__d(
  "WAWebOrgAdminGroupParticipantIdentities",
  [
    "WALogger",
    "WAWebApiContact",
    "WAWebApiContactUsernameFields",
    "WAWebGroupQueryJob",
    "WAWebUsernameTypes",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = _(t);
          if (n.length === 0) return new Map();
          var a = p(e);
          if (a == null) return new Map();
          try {
            yield o("WAWebGroupQueryJob").queryAndUpdateGroupMetadataById({
              id: a,
              request: "interactive",
            });
          } catch (e) {
            o("WALogger")
              .WARN(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "loadOrgAdminGroupParticipantIdentities: group metadata refresh failed",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs(
                "org-admin-group-participant-identities-refresh-failed",
              );
          }
          var i = n.map(function (e) {
              var t = e.lidWid;
              return t;
            }),
            l = yield o("WAWebApiContactUsernameFields")
              .bulkGetContactToUsernameInfoMap(i)
              .catch(function (e) {
                return (
                  o("WALogger")
                    .WARN(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "loadOrgAdminGroupParticipantIdentities: username lookup failed",
                        ])),
                    )
                    .catching(r("getErrorSafe")(e))
                    .sendLogs(
                      "org-admin-group-participant-identities-username-failed",
                    ),
                  new Map()
                );
              });
          return new Map(
            n.map(function (e) {
              var t,
                n,
                r = e.lid,
                a = e.lidWid,
                i = l.get(a.toJid());
              return [
                r,
                {
                  phoneNumber:
                    (t =
                      (n = o("WAWebApiContact").getPnIfLidIsLatestMapping(a)) ==
                      null
                        ? void 0
                        : n.user) != null
                      ? t
                      : null,
                  username:
                    (i == null ? void 0 : i.usernameSoftDeleted) === !0
                      ? null
                      : f(i == null ? void 0 : i.username),
                },
              ];
            }),
          );
        })),
        m.apply(this, arguments)
      );
    }
    function p(t) {
      var n = t.includes("@") ? t : t + "@g.us";
      try {
        return o("WAWebWidFactory").asGroupWidOrThrow(
          o("WAWebWidFactory").createWid(n),
        );
      } catch (t) {
        return (
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "loadOrgAdminGroupParticipantIdentities: invalid group identifier",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("org-admin-group-participant-identities-invalid-gid"),
          null
        );
      }
    }
    function _(e) {
      var t = [],
        n = 0;
      for (var r of new Set(e))
        try {
          t.push({
            lid: r,
            lidWid: o("WAWebWidFactory").createUserLidOrThrow(r, "lid"),
          });
        } catch (e) {
          n++;
        }
      return (
        n > 0 &&
          o("WALogger")
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "loadOrgAdminGroupParticipantIdentities: skipped ",
                  " invalid lids",
                ])),
              n,
            )
            .sendLogs("org-admin-group-participant-identities-invalid-lids"),
        t
      );
    }
    function f(e) {
      var t = o("WAWebUsernameTypes").serializeMaybeUsername(e);
      return t == null || t === "" ? null : t;
    }
    l.loadOrgAdminGroupParticipantIdentities = d;
  },
  98,
);
