__d(
  "WAWebSetUsernameJob",
  [
    "WAJobOrchestratorTypes",
    "WALogger",
    "WAPromiseQueue",
    "WAWebApiContact",
    "WAWebApiContactUsernameFields",
    "WAWebBackendApi",
    "WAWebMexSetUsernameJob",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsUsername",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = new (o("WAPromiseQueue").PromiseQueue)();
    function u(e, t) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "setUsernameQueryJob",
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var n = yield o("WAWebMexSetUsernameJob").mexSetUsernameQueryJob({
              input: e,
              reserved:
                o("WAWebUserPrefsUsername").getUsernameState() === "RESERVED",
              session_id: t,
              source: "USER_INPUT",
            });
            if (n) {
              var r = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE();
              return (
                yield p([
                  e != null
                    ? { userId: r, username: e }
                    : { userId: r, deleteUsername: !0 },
                ]),
                !0
              );
            }
            return !1;
          }),
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    function c(e) {
      var t = e.userId,
        n = e.username,
        r = e.usernameCountryCode;
      return t == null
        ? null
        : n != null && r != null
          ? { userId: t, username: n, usernameCountryCode: r }
          : n != null
            ? { userId: t, username: n }
            : r != null
              ? { userId: t, usernameCountryCode: r }
              : null;
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = [],
            r = new Map(),
            a = t.map(function (e) {
              var t = e.userId;
              return t;
            }),
            i = yield o(
              "WAWebApiContactUsernameFields",
            ).bulkGetContactToUsernameInfoMap(a),
            l = 0,
            s = [];
          for (var u of t) {
            var c = u.userId,
              d = u.username,
              m = u.usernameCountryCode,
              p = i.get(c.toJid()),
              _ = !c.isLid() || o("WAWebApiContact").getPhoneNumber(c),
              f =
                (d != null &&
                  ((p == null ? void 0 : p.username) !== d ||
                    (p == null ? void 0 : p.usernameSoftDeleted) === !0)) ||
                (u.deleteUsername === !0 &&
                  ((_ && (p == null ? void 0 : p.username) != null) ||
                    (!_ && (p == null ? void 0 : p.username) !== d))),
              g =
                m != null && (p == null ? void 0 : p.usernameCountryCode) !== m,
              h = f || g,
              y = { wasUpdated: !!h };
            if (h && f) {
              var C;
              y.oldUsername =
                (C = p == null ? void 0 : p.username) != null ? C : void 0;
            }
            if ((r.set(c.toString(), y), !!h)) {
              (l++, s.length < 3 && s.push(c.toLogString()));
              var b = c.toJid(),
                v = { id: b };
              (d != null
                ? (v.username = d)
                : u.deleteUsername === !0 &&
                  (_ == null
                    ? (v.usernameSoftDeleted = !0)
                    : (v.username = void 0),
                  u.displayNameLID != null &&
                    (v.displayNameLID = u.displayNameLID)),
                m != null && (v.usernameCountryCode = m),
                n.push(v));
            }
          }
          return (
            l > 0 &&
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[username] updated ",
                    " usernames in db + collection => ",
                    "",
                  ])),
                l,
                s,
              ),
            n.length === 0 ||
              (yield o("WAWebApiContactUsernameFields").bulkUpdateUsernamesInDb(
                n,
              ),
              yield o("WAWebBackendApi").frontendSendAndReceive(
                "bulkUpdateUsernames",
                { usernameUpdates: n },
              )),
            r
          );
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return s.enqueue(function () {
            return d(e);
          });
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return p(
            e.map(function (e) {
              var t = e.displayNameLID,
                n = e.userId;
              return { userId: n, displayNameLID: t, deleteUsername: !0 };
            }),
          );
        })),
        g.apply(this, arguments)
      );
    }
    ((l.setUsernameQueryJob = u),
      (l.maybeCreateSetUsernameInfoJobArg = c),
      (l.setUsernamesJob = p),
      (l.deleteUsernamesJob = f));
  },
  98,
);
