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
    async function f(e, t, n, a) {
      var i = p(t.length),
        l = i.defaultErrorAction,
        u = i.duplicateSubgroupSuggestionAction,
        f = i.exitedAction,
        g = i.initialAction,
        h = o(
          "WAWebSubgroupSuggestionCreateJob",
        ).createExistingGroupSubgroupSuggestion(e, t),
        y = h
          .then(function (e) {
            var i = r("countWhere")(e, function (e) {
              return e.error == null;
            });
            if (i === 0) {
              var c = e.some(function (e) {
                return e.error === d || e.error === m;
              });
              return (n(), c ? u : l);
            }
            return (
              a(),
              i !== t.length
                ? new (o("WAWebActionToast.react").ActionType)(
                    s._(
                      /*BTDS*/ '_j{"*":{"*":{"*":"Only {succeeded-suggestions} of {total-suggestions} pending group suggestions were sent successfully.","_1":"Only {succeeded-suggestions} of {total-suggestions} pending group suggestions was sent successfully."}}}',
                      [
                        s._param("succeeded-suggestions", i, [0]),
                        s._param("total-suggestions", t.length, [0]),
                        s._plural(i),
                      ],
                    ),
                  )
                : f
            );
          })
          .catch(
            o("WAFilteredCatch").filteredCatch(
              o("WAWebBackendErrors").ServerStatusCodeError,
              function (e) {
                return _(e, n);
              },
            ),
          )
          .catch(function () {
            return (n(), l);
          });
      (o("WAWebToastManager").ToastManager.open(
        c.jsx(o("WAWebActionToast.react").ActionToast, {
          initialAction: g,
          pendingAction: y,
        }),
      ),
        await h);
    }
    async function g(e, t, n, r) {
      var a = o("WAWebStateUtils").unproxy(e),
        i = p(),
        l = i.defaultErrorAction,
        s = i.exitedAction,
        u = i.initialAction,
        d = o(
          "WAWebSubgroupSuggestionCreateJob",
        ).createNewGroupSubgroupSuggestion({
          announce: t.announce,
          description: t.description,
          memberAddMode: t.memberAddMode,
          memberShareGroupHistoryMode: t.memberShareGroupHistoryMode,
          membershipApprovalMode: t.membershipApprovalMode,
          parentGroupId: a.id,
          restrict: t.restrict,
          subject: t.subject,
        }),
        m = d
          .then(function (e) {
            return (h(a, e), r == null || r(), s);
          })
          .catch(
            o("WAFilteredCatch").filteredCatch(
              o("WAWebBackendErrors").ServerStatusCodeError,
              function (e) {
                return _(e, n);
              },
            ),
          )
          .catch(function () {
            return (n(), l);
          });
      (o("WAWebToastManager").ToastManager.open(
        c.jsx(o("WAWebActionToast.react").ActionToast, {
          initialAction: u,
          pendingAction: m,
        }),
      ),
        await d);
    }
    async function h(t, n) {
      try {
        var r;
        (await o("WAWebApiSubgroupSuggestionStore").addSubgroupSuggestions(
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
    }
    ((l.createExistingGroupsSubgroupSuggestionsAction = f),
      (l.createNewGroupSubgroupSuggestionAction = g));
  },
  226,
);
