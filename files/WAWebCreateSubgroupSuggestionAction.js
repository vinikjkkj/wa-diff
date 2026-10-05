__d(
  "WAWebCreateSubgroupSuggestionAction",
  [
    "fbt",
    "WAFilteredCatch",
    "WALogger",
    "WAWebActionToast.react",
    "WAWebApiSubgroupSuggestionStore",
    "WAWebBackendErrors",
    "WAWebCommunitySubgroupSuggestionsUtils",
    "WAWebStateUtils",
    "WAWebSubgroupSuggestionCreateJob",
    "WAWebToastManager",
    "asyncToGeneratorRuntime",
    "countWhere",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = 405,
      m = "405",
      p = function (t) {
        return (
          t === void 0 && (t = 1),
          {
            initialAction: new (o("WAWebActionToast.react").ActionType)(
              s._(
                /*BTDS*/ '_j{"*":"Creating group suggestions.","_1":"Creating group suggestion."}',
                [s._plural(t)],
              ),
            ),
            exitedAction: new (o("WAWebActionToast.react").ActionType)(
              s._(
                /*BTDS*/ '_j{"*":"Suggestions sent for admin approval.","_1":"Suggestion sent for admin approval."}',
                [s._plural(t)],
              ),
            ),
            duplicateSubgroupSuggestionAction: new (o(
              "WAWebActionToast.react",
            ).ActionType)(
              s._(
                /*BTDS*/ "The group was already suggested to this community by another member.",
              ),
            ),
            defaultErrorAction: new (o("WAWebActionToast.react").ActionType)(
              s._(
                /*BTDS*/ '_j{"*":"Couldn\'t create group suggestions.","_1":"Couldn\'t create group suggestion."}',
                [s._plural(t)],
              ),
            ),
          }
        );
      },
      _ = function (t, n) {
        switch (t.status) {
          case 406:
            return new (o("WAWebActionToast.react").ActionType)(
              s._(
                /*BTDS*/ "Couldn't create group suggestion. Please enter a shorter group name.",
              ),
            );
          case 419:
            return (
              n(),
              new (o("WAWebActionToast.react").ActionType)(
                s._(
                  /*BTDS*/ "Couldn't create group suggestion. The community has reached the limit of suggestions.",
                ),
              )
            );
          default:
            return (n(), p().defaultErrorAction);
        }
      };
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.onBack,
            n = e.onEnd,
            a = e.parentGroupId,
            i = e.subgroupSuggestions,
            l = p(i.length),
            u = l.defaultErrorAction,
            f = l.duplicateSubgroupSuggestionAction,
            g = l.exitedAction,
            h = l.initialAction,
            y = o(
              "WAWebSubgroupSuggestionCreateJob",
            ).createExistingGroupSubgroupSuggestion(a, i),
            C = y
              .then(function (e) {
                var a = r("countWhere")(e, function (e) {
                  return e.error == null;
                });
                if (a === 0) {
                  var l = e.some(function (e) {
                    return e.error === d || e.error === m;
                  });
                  return (t(), l ? f : u);
                }
                return (
                  n(),
                  a !== i.length
                    ? new (o("WAWebActionToast.react").ActionType)(
                        s._(
                          /*BTDS*/ '_j{"*":{"*":{"*":"Only {succeeded-suggestions} of {total-suggestions} pending group suggestions were sent successfully.","_1":"Only {succeeded-suggestions} of {total-suggestions} pending group suggestions was sent successfully."}}}',
                          [
                            s._param("succeeded-suggestions", a, [0]),
                            s._param("total-suggestions", i.length, [0]),
                            s._plural(a),
                          ],
                        ),
                      )
                    : g
                );
              })
              .catch(
                o("WAFilteredCatch").filteredCatch(
                  o("WAWebBackendErrors").ServerStatusCodeError,
                  function (e) {
                    return _(e, t);
                  },
                ),
              )
              .catch(function () {
                return (t(), u);
              });
          (o("WAWebToastManager").ToastManager.open(
            c.jsx(o("WAWebActionToast.react").ActionToast, {
              initialAction: h,
              pendingAction: C,
            }),
          ),
            yield y);
        })),
        g.apply(this, arguments)
      );
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.onBack,
            n = e.onEnd,
            r = e.parentGroupChat,
            a = e.subgroupSuggestion,
            i = o("WAWebStateUtils").unproxy(r),
            l = p(),
            s = l.defaultErrorAction,
            u = l.exitedAction,
            d = l.initialAction,
            m = o(
              "WAWebSubgroupSuggestionCreateJob",
            ).createNewGroupSubgroupSuggestion({
              announce: a.announce,
              description: a.description,
              memberAddMode: a.memberAddMode,
              memberShareGroupHistoryMode: a.memberShareGroupHistoryMode,
              membershipApprovalMode: a.membershipApprovalMode,
              parentGroupId: i.id,
              restrict: a.restrict,
              subject: a.subject,
            }),
            f = m
              .then(function (e) {
                return (C(i, e), n == null || n(), u);
              })
              .catch(
                o("WAFilteredCatch").filteredCatch(
                  o("WAWebBackendErrors").ServerStatusCodeError,
                  function (e) {
                    return _(e, t);
                  },
                ),
              )
              .catch(function () {
                return (t(), s);
              });
          (o("WAWebToastManager").ToastManager.open(
            c.jsx(o("WAWebActionToast.react").ActionToast, {
              initialAction: d,
              pendingAction: f,
            }),
          ),
            yield m);
        })),
        y.apply(this, arguments)
      );
    }
    function C(e, t) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          try {
            var r;
            (yield o("WAWebApiSubgroupSuggestionStore").addSubgroupSuggestions(
              t.id,
              [n],
            ),
              (r = t.groupMetadata) == null ||
                (r = r.subgroupSuggestions) == null ||
                r.add(
                  babelHelpers.extends({}, n, {
                    id: o(
                      "WAWebCommunitySubgroupSuggestionsUtils",
                    ).getSubgroupSuggestionId(n.id, n.owner),
                    groupId: n.id,
                  }),
                ));
          } catch (t) {
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "failed to add subgroup suggestion to table",
                  ])),
              )
              .verbose();
          }
        })),
        b.apply(this, arguments)
      );
    }
    ((l.createExistingGroupsSubgroupSuggestionsAction = f),
      (l.createNewGroupSubgroupSuggestionAction = h));
  },
  226,
);
