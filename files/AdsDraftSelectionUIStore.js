__d(
  "AdsDraftSelectionUIStore",
  [
    "AdsDataAtom",
    "AdsDraftDraftCreateCurrentDraftDataActionFlux",
    "AdsDraftDraftCurrentDraftLoadedDataActionFlux",
    "AdsDraftLoginAsDraftsLoadedDataActionFlux",
    "AdsDraftLoginAsSetDraftTypeDataActionFlux",
    "AdsDraftSelectionStore",
    "AdsDraftTypes",
    "FluxReduceStore",
    "adsDraftIsApplicationIDPowerEditor",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = { isSelectDraftVisible: !1, selectedDraftType: null },
      u = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.getForAccount = function (e) {
              return t.getState().get(e, s);
            }),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.getInitialState = function () {
            return r("immutable").Map();
          }),
          (n.__getActionTypes = function () {
            return [
              o("AdsDraftDraftCreateCurrentDraftDataActionFlux").actionType,
              o("AdsDraftDraftCurrentDraftLoadedDataActionFlux").actionType,
              o("AdsDraftLoginAsDraftsLoadedDataActionFlux").actionType,
              o("AdsDraftLoginAsSetDraftTypeDataActionFlux").actionType,
            ];
          }),
          (n.__getDependencyStores = function () {
            return [r("AdsDraftSelectionStore")];
          }),
          (n.reduce = function (t, n) {
            var e = n.action;
            if (!r("adsDraftIsApplicationIDPowerEditor")(e.adsApplicationID))
              return t;
            switch (
              (this.getDispatcher().waitFor(this.getDependencyDispatchTokens()),
              e.type)
            ) {
              case o("AdsDraftLoginAsSetDraftTypeDataActionFlux").actionType:
                return t.update(e.accountID, s, function (t) {
                  return babelHelpers.extends({}, t, {
                    selectedDraftType: e.draftType,
                  });
                });
              case o("AdsDraftLoginAsDraftsLoadedDataActionFlux").actionType: {
                var a = r("AdsDraftSelectionStore").getAvailableDrafts(
                    e.accountID,
                  ),
                  i =
                    a.hasValue() &&
                    a
                      .getValueEnforcing()
                      .has(r("AdsDraftTypes").LOGIN_AS_ACTIVE)
                      ? r("AdsDraftTypes").LOGIN_AS_ACTIVE
                      : r("AdsDraftTypes").LOGIN_AS_CREATE_NEW;
                return t.update(e.accountID, s, function () {
                  return {
                    isSelectDraftVisible: !e.hideSelectDraftModal,
                    selectedDraftType: i,
                  };
                });
              }
              case o("AdsDraftDraftCreateCurrentDraftDataActionFlux")
                .actionType:
              case o("AdsDraftDraftCurrentDraftLoadedDataActionFlux")
                .actionType:
                return t.update(e.accountID, s, function (e) {
                  return babelHelpers.extends({}, e, {
                    isSelectDraftVisible: !1,
                  });
                });
              default:
                return t;
            }
          }),
          t
        );
      })(r("FluxReduceStore"));
    u.__moduleID = i.id;
    var c = new u(e || (e = r("AdsDataAtom")));
    l.default = c;
  },
  98,
);
