__d(
  "WAWebSelectContactsExceptModal.react",
  [
    "fbt",
    "WACustomError",
    "WALogger",
    "WAPromiseTimeout",
    "WAWebBackendErrors",
    "WAWebContactCollection",
    "WAWebLidMigrationUtils",
    "WAWebModalManager",
    "WAWebQueryPrivacyDisallowedListUtil",
    "WAWebSchemaPrivacyDisallowedList",
    "WAWebSelectModal.react",
    "WAWebSelectModalFooter.react",
    "WAWebSetPrivacyForOneCategoryAction",
    "WAWebSetPrivacyJob",
    "WAWebSettingsConst",
    "WAWebSyncPrivacyDisallowedLists",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUsernameWorkerCompatibleGatingUtils",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
    "lodash",
    "react",
    "useWAWebAsync",
    "useWAWebFilteredContacts",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d,
      m,
      p = m || (m = o("react")),
      _ = 64e3;
    function f(e) {
      return e === "about"
        ? o("WAWebSchemaPrivacyDisallowedList").PrivacyDisallowedListType.About
        : e === "profilePicture"
          ? o("WAWebSchemaPrivacyDisallowedList").PrivacyDisallowedListType
              .ProfilePicture
          : e === "lastSeen"
            ? o("WAWebSchemaPrivacyDisallowedList").PrivacyDisallowedListType
                .LastSeen
            : e === "groupAdd"
              ? o("WAWebSchemaPrivacyDisallowedList").PrivacyDisallowedListType
                  .GroupAdd
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      e,
                  );
                })();
    }
    function g(e) {
      switch (e) {
        case "about":
          return s._(/*BTDS*/ "Hide About from...");
        case "profilePicture":
          return s._(/*BTDS*/ "Hide profile picture from...");
        case "lastSeen":
          return s._(/*BTDS*/ "Hide last seen from...");
        case "groupAdd":
          return s._(/*BTDS*/ "My contacts except...");
      }
    }
    function h(t) {
      var a,
        i,
        l,
        c,
        d,
        m = t.category,
        h = t.onBack,
        v = t.onConfirm,
        S = t.onDismiss,
        R = (a = h != null ? h : S) != null ? a : b,
        L = r("useWAWebAsync")(
          function () {
            var t = (function () {
              var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* () {
                  try {
                    var t = (function () {
                      var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                        function* () {
                          var e = f(m);
                          yield o(
                            "WAWebSyncPrivacyDisallowedLists",
                          ).syncSinglePrivacyDisallowedList(e);
                          var t = yield o("WAWebSchemaPrivacyDisallowedList")
                            .getPrivacyDisallowedListTable()
                            .get(e);
                          if (t != null) {
                            var n = C(t, e);
                            return { excludedContacts: n, dhash: t.dhash };
                          }
                        },
                      );
                      return function () {
                        return e.apply(this, arguments);
                      };
                    })();
                    return yield o("WAPromiseTimeout").promiseTimeout(
                      t(),
                      o("WAWebSettingsConst")
                        .WAIT_FOR_PRIVACY_LIST_SYNC_TIMEOUT_MS,
                    );
                  } catch (t) {
                    var a = r("getErrorSafe")(t);
                    throw (
                      t instanceof o("WACustomError").TimeoutError ||
                        o("WALogger")
                          .ERROR(
                            e ||
                              (e = babelHelpers.taggedTemplateLiteralLoose([
                                "error: ",
                                "",
                              ])),
                            String(a.stack),
                          )
                          .sendLogs(
                            "SelectContactsExceptModal:failed to get privacyDisallowedList",
                          ),
                      o("WAWebToastManager").ToastManager.open(
                        p.jsx(o("WAWebToast.react").Toast, {
                          msg: s._(
                            /*BTDS*/ "Failed to get contacts except list. Please try again.",
                          ),
                        }),
                      ),
                      R(),
                      t
                    );
                  }
                },
              );
              return function () {
                return t.apply(this, arguments);
              };
            })();
            return t();
          },
          [m],
        ),
        E = r("useWAWebFilteredContacts")();
      if (L.error != null) return null;
      var k =
          (i = (l = L.value) == null ? void 0 : l.excludedContacts) != null
            ? i
            : [],
        I = (c = (d = L.value) == null ? void 0 : d.dhash) != null ? c : null,
        T = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t) {
              var n = k.map(function (e) {
                  return { wid: e.id, username: e.username };
                }),
                a = e.map(function (e) {
                  return { wid: e.id, username: e.username };
                }),
                i = r("lodash")
                  .differenceBy(a, n, function (e) {
                    return e.wid.toString();
                  })
                  .map(function (e) {
                    return {
                      action: o("WAWebSetPrivacyJob").PrivacyUserAction.Add,
                      wid: e.wid,
                      username: e.username,
                    };
                  }),
                l = r("lodash")
                  .differenceBy(n, a, function (e) {
                    return e.wid.toString();
                  })
                  .map(function (e) {
                    return {
                      action: o("WAWebSetPrivacyJob").PrivacyUserAction.Remove,
                      wid: e.wid,
                      username: e.username,
                    };
                  }),
                c = [].concat(i, l),
                d = o(
                  "WAWebSetPrivacyForOneCategoryAction",
                ).privacyWebNameToServerName(m);
              if (
                d === "readreceipts" ||
                d === "online" ||
                d === "calladd" ||
                d === "messages"
              )
                throw r("err")(
                  "select_contacts_except_modal: name can not be " + d,
                );
              try {
                (yield o(
                  "WAWebSetPrivacyForOneCategoryAction",
                ).setPrivacyForOneCategory(
                  { value: "contact_blacklist", users: c, dhash: t, name: d },
                  a.map(function (e) {
                    return e.wid;
                  }),
                ),
                  v());
              } catch (e) {
                var _ = r("getErrorSafe")(e),
                  f =
                    e instanceof
                      o("WAWebBackendErrors").ServerStatusCodeError &&
                    e.statusCode === 409;
                (f ||
                  o("WALogger")
                    .WARN(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "select_contacts_except_modal: set visiblity option failed ",
                          "",
                        ])),
                      _.stack,
                    )
                    .sendLogs(
                      "select_contacts_except_modal: set visiblity option failed",
                    ),
                  o("WAWebToastManager").ToastManager.open(
                    p.jsx(o("WAWebToast.react").Toast, {
                      msg: s._(
                        /*BTDS*/ "Failed to update privacy settings. Please try again.",
                      ),
                    }),
                  ));
              }
              R();
            },
          );
          return function (n, r) {
            return e.apply(this, arguments);
          };
        })(),
        D = Array.from(new Set([].concat(E, k)));
      return p.jsx(
        o("WAWebSelectModal.react").SelectModal,
        babelHelpers.extends(
          { title: g(m) },
          h != null ? { onBack: R } : { onCancel: R },
          {
            onConfirm: function (t) {
              var e = t.selectedItems;
              return T(e, I);
            },
            getInitialItems: function () {
              return k;
            },
            loadingInitialItems: L.loading,
            listType: o("WAWebSelectModal.react").ListType.ContactSelectModal,
            maxItems: _,
            singleSelectionFooterType: o("WAWebSelectModalFooter.react")
              .FooterType.CONFIRM,
            multipleSelectionFooterType: o("WAWebSelectModalFooter.react")
              .FooterType.CONFIRM,
            contacts: D,
            getSelectionSummary: y,
            enableSelectAll: !0,
            activeWithoutSelection: !0,
            tsNavigationData: {
              surface: "unknown",
              viewName: "select-contacts-except",
            },
          },
        ),
      );
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y(e) {
      var t = e.length;
      return s
        ._(
          /*BTDS*/ '_j{"*":"{count} contacts excluded","_1":"1 contact excluded"}',
          [s._plural(t, "count")],
        )
        .toString();
    }
    function C(e, t) {
      if (
        o(
          "WAWebQueryPrivacyDisallowedListUtil",
        ).isPrivacyDisallowedListTypeLidMigrated(t)
      ) {
        var n = o(
            "WAWebUsernameWorkerCompatibleGatingUtils",
          ).onlyShowLidContacts(),
          a = o("WAWebLidMigrationUtils").toAddressingModeFactory(n);
        return e.disallowedList.map(function (e) {
          var t = a(o("WAWebWidFactory").createWid(e));
          if (t == null)
            throw (
              n
                ? o("WALogger")
                    .ERROR(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "id is null for lid in privacy list",
                        ])),
                    )
                    .sendLogs("missing-id-for-lid-in-privacy-list")
                : o("WALogger")
                    .ERROR(
                      d ||
                        (d = babelHelpers.taggedTemplateLiteralLoose([
                          "pn is null for lid in privacy list",
                        ])),
                    )
                    .sendLogs("missing-pn-for-lid-in-privacy-list"),
              r("err")(
                "[WAWebSelectContactsExceptModal] " +
                  (n ? "lid" : "pn") +
                  " is null in privacy list",
              )
            );
          return o("WAWebContactCollection").ContactCollection.gadd(t);
        });
      }
      return e.disallowedList.map(function (e) {
        return o("WAWebContactCollection").ContactCollection.gadd(
          o("WAWebWidFactory").createWid(e),
        );
      });
    }
    function b() {
      o("WAWebModalManager").ModalManager.close();
    }
    l.default = h;
  },
  226,
);
