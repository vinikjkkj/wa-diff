__d(
  "WAWebContactMutator",
  [
    "WALogger",
    "WAWebApiContact",
    "WAWebBizCoexGatingUtils",
    "WAWebContactCollection",
    "WAWebProtobufsAdv.pb",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    function d(e) {
      if (e.isLid()) {
        var t = o("WAWebApiContact").getPnIfLidIsLatestMapping(e),
          n =
            t != null
              ? o("WAWebContactCollection").ContactCollection.gadd(t)
              : null;
        return {
          lidContact: o("WAWebContactCollection").ContactCollection.gadd(e),
          pnContact: n,
        };
      }
      var r = o("WAWebApiContact").getCurrentLid(e),
        a =
          r != null
            ? o("WAWebContactCollection").ContactCollection.gadd(r)
            : null;
      return {
        pnContact: o("WAWebContactCollection").ContactCollection.gadd(e),
        lidContact: a,
      };
    }
    function m(e, t) {
      var n = e.lidContact,
        r = e.pnContact;
      (r != null && r.set(t), n != null && n.set(t));
    }
    function p(e) {
      var t = e.contactId,
        n = e.pushname,
        r = d(o("WAWebWidFactory").asUserWidOrThrow(t)),
        a = r.lidContact,
        i = r.pnContact;
      if ((i == null || i.pushname === n) && (a == null || a.pushname === n))
        return !1;
      var l = { pushname: n };
      return (m(r, l), !0);
    }
    function _(e) {
      var t = e.pushnameUpdates;
      t.forEach(function (e) {
        var t = e.contactId,
          n = e.pushname;
        p({ contactId: t, pushname: n });
      });
    }
    function f(e) {
      var t = e.lidPhoneNumberMappings;
      t.forEach(function (e) {
        var t = e.lid,
          n = e.phoneNumber,
          r = o("WAWebContactCollection").ContactCollection.get(
            o("WAWebWidFactory").createUserWidOrThrow(t, "lid"),
          ),
          a = o("WAWebContactCollection").ContactCollection.get(
            o("WAWebWidFactory").createUserWidOrThrow(n),
          );
        if (r != null) {
          var i = (r.phoneNumber =
            o("WAWebWidFactory").createUserWidOrThrow(n));
          r.copyFieldsFromPnContact(i);
        }
        (r == null || r.updateContactBlocked(),
          a == null || a.updateContactBlocked(),
          r == null || r.updateContactOptedOutOfMarketingMessages(),
          a == null || a.updateContactOptedOutOfMarketingMessages());
      });
    }
    function g(e) {
      var t = e.lidContactDataMappings;
      t.forEach(function (e) {
        var t = e.displayNameLID,
          n = e.lid,
          r = e.requestedPnTimestamp,
          a = e.shareOwnPn,
          i = o("WAWebContactCollection").ContactCollection.gadd(n);
        i != null &&
          (a != null && (i.shareOwnPn = a),
          t != null && (i.displayNameLID = t),
          r != null && (i.requestedPnTimestamp = r));
      });
    }
    function h(t) {
      var n = t.contactId,
        r = t.disappearingModeDuration,
        a = t.disappearingModeSettingTimestamp,
        i = t.isEphemeralityDisabled,
        l = d(o("WAWebWidFactory").asUserWidOrThrow(n)),
        s = {
          disappearingModeDuration: r,
          disappearingModeSettingTimestamp: a,
          isEphemeralityDisabled: i,
        };
      (m(l, s),
        o("WALogger")
          .LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "updated contact disappearing mode",
              ])),
          )
          .tags("contact"));
    }
    function y(e) {
      var t = e.contactId,
        n = e.textStatusEmoji,
        r = e.textStatusEphemeralDuration,
        a = e.textStatusExpiryTs,
        i = e.textStatusLastUpdateTime,
        l = e.textStatusString,
        u = d(o("WAWebWidFactory").asUserWidOrThrow(t)),
        c = {
          textStatusString: l,
          textStatusEmoji: n,
          textStatusEphemeralDuration: r,
          textStatusLastUpdateTime: i,
          textStatusExpiryTs: a,
        };
      (m(u, c),
        o("WALogger")
          .LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "updated contact text status",
              ])),
          )
          .tags("contact"));
    }
    function C(e) {
      var t = e.businessInfo,
        n = e.contactId;
      if (t != null) {
        var r = d(o("WAWebWidFactory").asUserWidOrThrow(n));
        (m(r, babelHelpers.extends({}, t)),
          o("WALogger")
            .LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "updated contact business info",
                ])),
            )
            .tags("contact"));
      }
    }
    function b(e) {
      var t = e.usernameUpdates;
      t.forEach(function (e) {
        var t = e.displayNameLID,
          n = e.id,
          r = e.username,
          a = e.usernameCountryCode,
          i = e.usernameSoftDeleted,
          l = d(o("WAWebWidFactory").createUserWidOrThrow(n)),
          s = l.lidContact,
          u = l.pnContact,
          c = u != null && (u.username !== r || u.usernameCountryCode !== a),
          p = s != null && (s.username !== r || s.usernameCountryCode !== a);
        if (!(!c && !p)) {
          var _ = {};
          (a != null && (_.usernameCountryCode = a),
            t != null && (_.displayNameLID = t),
            i !== !0 && (_.username = r),
            m(l, _));
        }
      });
    }
    function v(e) {
      var t = e.advAccountType,
        n = e.contactId;
      if (o("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled()) {
        var r = t === o("WAWebProtobufsAdv.pb").ADVEncryptionType.HOSTED;
        o("WAWebContactCollection")
          .ContactCollection.gadd(n)
          .set(r ? { isHosted: !0, isOrHasBeenHosted: !0 } : { isHosted: !1 });
      }
    }
    function S(e) {
      var t = e.showMe,
        n = e.showWithoutName;
      return o("WAWebContactCollection").ContactCollection.getFilteredContacts({
        showMe: t,
        showWithoutName: n,
      });
    }
    function R(e) {
      var t = e.id,
        n = e.usernameKey,
        r = d(o("WAWebWidFactory").createUserWidOrThrow(t)),
        a = { usernameKey: n };
      (m(r, a),
        o("WALogger")
          .LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "updated contact username key",
              ])),
          )
          .tags("contact"));
    }
    ((l.updatePushname = p),
      (l.bulkUpdateContactPushnames = _),
      (l.bulkUpdatePhoneNumberJids = f),
      (l.bulkUpdateLidContactState = g),
      (l.updateDisappearingMode = h),
      (l.updateTextStatus = y),
      (l.updateBusinessInfo = C),
      (l.bulkUpdateUsernames = b),
      (l.updateContactAdvAccountType = v),
      (l.getFilteredContacts = S),
      (l.updateUsernameKey = R));
  },
  98,
);
