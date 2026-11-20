__d(
  "WAWebParticipantPickerDirectoryUtils",
  [
    "WAWebApiContact",
    "WAWebOrgGroupContactPolicy",
    "WAWebOrgTimelock",
    "WAWebParticipantPickerContactUtils",
    "WAWebParticipantPickerEnterTarget",
    "WAWebParticipantPickerFocus",
    "WAWebPersonRowPolicy",
    "WAWebReachoutTimelockUtils",
    "WAWebWorkDirectory.react",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n, r) {
      return [].concat(r ? n : t, e);
    }
    function s(e, t) {
      return t
        ? {
            selectionPresentation: "compact",
            selectedLids: o(
              "WAWebOrgGroupContactPolicy",
            ).getSelectedOrgGroupLids(e),
          }
        : {};
    }
    function u(e, t, n) {
      return babelHelpers.extends({}, e, {
        isAllowed: function (a) {
          return (
            (!n || !t.has(o("WAWebPersonRowPolicy").toPersonLid(a))) &&
            (e == null || e.isAllowed == null ? void 0 : e.isAllowed(a)) !== !1
          );
        },
      });
    }
    function c(e, t, n, r, a) {
      var i = o("WAWebPersonRowPolicy").toPersonLid(e);
      return (
        (r || a || !t.has(i)) &&
        (n == null || n.isAllowed == null ? void 0 : n.isAllowed(e)) !== !1
      );
    }
    function d(e, t, n) {
      return t || n ? e : null;
    }
    function m(e) {
      return e.refreshedPresentation
        ? o(
            "WAWebParticipantPickerEnterTarget",
          ).getRefreshedParticipantPickerEnterTarget({
            contacts: e.contacts,
            separateContacts: e.separateContacts,
            people: e.people,
            directoryContacts: e.directoryContacts,
            participants: e.participants,
            selectedOutContactIds: e.selectedOutContactIds,
            allowOutContacts: e.allowOutContacts,
            canSelectUnknown: e.canSelectUnknown && !e.unknownAlreadySelected,
          })
        : o(
            "WAWebParticipantPickerEnterTarget",
          ).getParticipantPickerEnterTarget({
            separateContacts: e.separateContacts,
            contacts: e.contacts,
            filteredOutContacts: e.filteredOutContacts,
            people: e.people,
            directoryContacts: e.directoryContacts,
            canSelectUnknown: e.canSelectUnknown,
          });
    }
    function p(e, t, n, r) {
      return n
        ? e.filter(function (e) {
            return R(e.lid, t, n, r);
          })
        : e;
    }
    function _(e, t) {
      var n = o("WAWebOrgGroupContactPolicy").getExistingOrgGroupContact(e),
        r = n == null ? o("WAWebApiContact").getPhoneNumber(e) : n.phoneNumber,
        a = r == null ? null : o("WAWebApiContact").getCurrentLid(r);
      return a == null || a.equals(e)
        ? { allowed: !0, existingContact: n }
        : {
            allowed: n != null && (t == null ? void 0 : t(n, e)) === !0,
            existingContact: n,
          };
    }
    function f(e, t, n, r) {
      return !n ||
        o(
          "WAWebParticipantPickerContactUtils",
        ).findSelectedParticipantPickerContactForWid(t, e.lid) != null
        ? !1
        : !_(e.lid, r).allowed;
    }
    function g(e) {
      var t = e.directoryContact,
        n = e.isBusy,
        r = e.isDirectoryRecipientAllowed,
        o = e.participants,
        a = e.retainSelected,
        i = e.selectedCount,
        l = e.selectionSizeLimit;
      return a
        ? S({
            directoryContact: t,
            isBusy: n,
            isDirectoryRecipientAllowed: r,
            participants: o,
            selectedCount: i,
            selectionSizeLimit: l,
          })
        : v(t);
    }
    function h(e, t) {
      e: {
        var n = e;
        if (
          ((typeof n == "object" && n !== null) || typeof n == "function") &&
          n.kind === "remove" &&
          "contact" in n
        ) {
          var r = n.contact;
          t.onRemove(r);
          break e;
        }
        if (
          ((typeof n == "object" && n !== null) || typeof n == "function") &&
          n.kind === "select" &&
          "contact" in n
        ) {
          var o = n.contact;
          t.onSelect(o);
          break e;
        }
        if (
          ((typeof n == "object" && n !== null) || typeof n == "function") &&
          n.kind === "limit"
        ) {
          t.onLimit();
          break e;
        }
        if (
          ((typeof n == "object" && n !== null) || typeof n == "function") &&
          n.kind === "none"
        )
          return;
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            n,
        );
      }
    }
    function y(e, t, n, r) {
      return n ? (t != null ? t : r) : e;
    }
    function C(e, t, n) {
      return function (r) {
        return f(r, e, t, n);
      };
    }
    function b(e) {
      return function (t, n) {
        var r = g({
          directoryContact: n,
          isBusy: e.isBusy,
          isDirectoryRecipientAllowed: e.isDirectoryRecipientAllowed,
          participants: e.participants,
          retainSelected: e.retainSelected,
          selectedCount: e.getSelectedCount(),
          selectionSizeLimit: e.selectionSizeLimit,
        });
        h(r, {
          onRemove: function (r) {
            return e.onRemove(
              r,
              o(
                "WAWebParticipantPickerFocus",
              ).shouldFocusParticipantPickerSearch(t, e.retainSelected),
            );
          },
          onSelect: function (r) {
            return e.onSelect(t, r);
          },
          onLimit: e.onLimit,
        });
      };
    }
    function v(e) {
      var t = o("WAWebWorkDirectory.react").getWorkDirectoryContactModel(e);
      return t == null ? { kind: "none" } : { kind: "select", contact: t };
    }
    function S(e) {
      var t,
        n = e.directoryContact,
        r = e.isBusy,
        a = e.isDirectoryRecipientAllowed,
        i = e.participants,
        l = e.selectedCount,
        s = e.selectionSizeLimit,
        u = o(
          "WAWebParticipantPickerContactUtils",
        ).findSelectedParticipantPickerContactForWid(i, n.lid);
      if (u != null) return { kind: "remove", contact: u };
      if (r || E(n.lid)) return { kind: "none" };
      var c = _(n.lid, a);
      if (!c.allowed) return { kind: "none" };
      if (l >= s) return { kind: "limit" };
      var d =
        (t = c.existingContact) != null
          ? t
          : o("WAWebWorkDirectory.react").getWorkDirectoryContactModel(n);
      return d == null ? { kind: "none" } : { kind: "select", contact: d };
    }
    function R(e, t, n, r) {
      return !n || (L(e, t, n) && _(e, r).allowed);
    }
    function L(e, t, n) {
      return (
        !n ||
        (o(
          "WAWebParticipantPickerContactUtils",
        ).findSelectedParticipantPickerContactForWid(t, e) == null &&
          !E(e))
      );
    }
    function E(e) {
      return (
        o("WAWebReachoutTimelockUtils").isUserReachoutTimelockedAndVisible() &&
        !o("WAWebOrgTimelock").canMessageOrgMemberWhileTimelocked(e)
      );
    }
    ((l.getParticipantPickerDirectoryExclusions = e),
      (l.getParticipantPickerDirectoryPresentation = s),
      (l.getParticipantPickerPersonRules = u),
      (l.getParticipantPickerPersonListed = c),
      (l.getParticipantPickerPersonChecked = d),
      (l.getParticipantPickerSearchEnterTarget = m),
      (l.getParticipantPickerWorkEnterCandidates = p),
      (l.getParticipantPickerDirectoryEligibility = _),
      (l.isParticipantPickerDirectoryContactDisabled = f),
      (l.getParticipantPickerDirectorySelection = g),
      (l.applyParticipantPickerDirectorySelection = h),
      (l.getParticipantPickerSearchFocusTarget = y),
      (l.getParticipantPickerDirectoryDisabledChecker = C),
      (l.getParticipantPickerWorkDirectoryClickHandler = b));
  },
  98,
);
