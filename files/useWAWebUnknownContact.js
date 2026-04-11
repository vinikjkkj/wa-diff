__d(
  "useWAWebUnknownContact",
  [
    "WALogger",
    "WAPhoneFindCC",
    "WAWebContactlessChatUtils",
    "WAWebHttpErrors",
    "WAWebLinkDevicePhoneNumberEntryInputFormatUtils",
    "WAWebNetworkStatus",
    "WAWebTrunkPrefixUtils",
    "WAWebUserPrefsMeUser",
    "WAWebUsernameGatingUtils",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "react",
    "useWAWebAsync",
    "useWAWebDebouncedUsernameLookup",
    "useWAWebStableCallback",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = u || (u = o("react")),
      d = c.useCallback,
      m = c.useRef,
      p = c.useState;
    function _(t) {
      var a = t.onLoading,
        i = t.phoneOrUsername,
        l = t.requestOrigin,
        u = t.searchPhoneNumber,
        c = t.searchUsername,
        _ = m(o("WAWebContactlessChatUtils").queryExistsAndGetChatCached()),
        f = p(),
        g = f[0],
        h = f[1],
        y = p(!1),
        C = y[0],
        b = y[1],
        v = p(!1),
        S = v[0],
        R = v[1],
        L = p(null),
        E = L[0],
        k = L[1],
        I = function (t) {
          (b(t), a == null || a(t));
        },
        T = r("useWAWebStableCallback")(function (e) {
          if (
            e != null &&
            e.searchQuery === i &&
            (g == null ||
              g.searchQuery !== e.searchQuery ||
              (g.wid == null && e.wid != null))
          ) {
            h(e);
            return;
          }
        }),
        D = d(
          function (e) {
            if (
              !o(
                "WAWebContactlessChatUtils",
              ).PHONE_NUMBER_VALIDATION_REGEX.test(i)
            )
              return !1;
            var t = o("WAPhoneFindCC").extractDigits(e),
              n = o("WAPhoneFindCC").findCC(t),
              r = t.substring(n.length),
              a = o(
                "WAWebLinkDevicePhoneNumberEntryInputFormatUtils",
              ).isPhoneNumberValid(Number(n), r),
              l = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
            if (l != null && !a && e.trim()[0] !== "+") {
              var s = o("WAPhoneFindCC").findCC(l.user),
                c = o("WAWebTrunkPrefixUtils").trimTrunkPrefix(s, t);
              a = o(
                "WAWebLinkDevicePhoneNumberEntryInputFormatUtils",
              ).isPhoneNumberValid(Number(s), c);
            }
            if (
              l != null &&
              o("WAWebUsernameGatingUtils").phoneNumberSharingFlowEnabled()
            ) {
              var d = l.user,
                m = o("WAPhoneFindCC").extractDigits(d);
              if (t === m) return !1;
            }
            return !!i && a && u;
          },
          [i, u],
        ),
        x = r("useWAWebStableCallback")(
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            try {
              if ((k(null), D(i))) {
                var t,
                  n,
                  a =
                    (i.trim()[0] === "+" ? "+" : "") +
                    o("WAPhoneFindCC").extractDigits(i),
                  l = !!((t = _.current) != null && t.isCached(a));
                if (!l && (I(!0), !r("WAWebNetworkStatus").online))
                  throw new (o("WAWebHttpErrors").HttpNetworkError)();
                var u = yield (n = _.current) == null ? void 0 : n.getOrRun(a);
                if (u == null) return;
                if (
                  o("WAWebUsernameGatingUtils").phoneNumberSharingFlowEnabled()
                ) {
                  var c = u.chat,
                    d = u.wid;
                  if (
                    (c != null && o("WAWebUserPrefsMeUser").isMePnUser(c.id)) ||
                    (d != null && o("WAWebUserPrefsMeUser").isMePnUser(d))
                  )
                    return;
                }
                T(babelHelpers.extends({}, u, { searchQuery: i }));
              }
            } catch (t) {
              (k(t instanceof Error ? t : r("getErrorSafe")(t)),
                t instanceof o("WAWebHttpErrors").HttpNetworkError
                  ? o("WALogger").ERROR(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          " Unable to connect to the internet: ",
                          "",
                        ])),
                      t,
                    )
                  : o("WALogger")
                      .ERROR(
                        s ||
                          (s = babelHelpers.taggedTemplateLiteralLoose([
                            "Phone number existence check failed with exceptions: ",
                            "",
                          ])),
                        t,
                      )
                      .sendLogs("phoneNumberExistence-unknownContactSearch"));
            } finally {
              I(!1);
            }
          }),
        );
      return (
        r("useWAWebAsync")(x, [i]),
        o("useWAWebDebouncedUsernameLookup").useDebouncedUsernameLookup({
          text: i,
          setUnknownContactInfo: T,
          setLoading: R,
          searchUsername: c,
          requestOrigin: l,
        }),
        {
          unknownContactInfo:
            (g == null ? void 0 : g.searchQuery) === i ? g : null,
          loading: C || S,
          error: E,
          onRetry: x,
        }
      );
    }
    l.default = _;
  },
  98,
);
