__d(
  "WAJids",
  ["WAAssertUnreachable", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 0,
      s = "@me",
      u = "@system",
      c = "status@broadcast",
      d = "0@s.whatsapp.net",
      m = "call",
      p = "@g.us",
      _ = /^([1-9][0-9]{0,19}|(?!10)[1-9][0-9]{4,19}-[1-9][0-9]{9})@g.us$/,
      f = "@call",
      g = "@msgr",
      h = "msgr",
      y = "@interop",
      C = "interop",
      b = /^([1-9][0-9]{0,2}-[1-9][0-9]{0,14}(:[0])?)@interop$/,
      v = /^([1-9][0-9]{0,2}-[1-9][0-9]{0,14}(:[0])?)@interop$/,
      S = /^([1-9][0-9]{0,19}(:[1-9][0-9]{0,2})?)@msgr$/,
      R = /^([1-9][0-9]{0,19})@msgr$/,
      L = /^([1-9][0-9]{0,19})(:0)?@msgr$/,
      E = "@s.whatsapp.net",
      k = "s.whatsapp.net",
      I = "@s.whatsapp.net",
      T = "s.whatsapp.net",
      D = "lid",
      x = "@newsletter",
      $ = /^([1-9][0-9]{0,19})@newsletter$/,
      P =
        /^(0|((?!10)[1-9][0-9]{4,19}(\.[0-9]{1,2})?(:[0-9]{1,2})))@s.whatsapp.net$/,
      N = /^(0|((?!10)[1-9][0-9]{4,19})(\.[0-9]{1,2})?)@s.whatsapp.net$/,
      M = "@lid",
      w = "lid",
      A = /^([1-9][0-9]{0,14})@lid$/,
      F = /^([1-9][0-9]{0,14}(:[0-9]{1,2})?)@lid$/,
      O = "@broadcast",
      B = /^(status|location|[1-9][0-9]{0,19})@broadcast$/,
      W = /^([0-9a-fA-F]{18,32})@call$/,
      q = "@hosted",
      U = "hosted",
      V = /^(((?!10)[1-9][0-9]{4,19})):99@hosted$/,
      H = "@hosted.lid",
      G = "hosted.lid",
      z = /^([1-9][0-9]{0,14}):99@hosted.lid$/,
      j = "@bot",
      K = /^[1-9][0-9]{0,19}(:0)?@bot$/,
      Q = "16505361212" + I,
      X = /([0-9a-zA-Z-:]+)@(g\.us|call|s\.whatsapp\.net|broadcast|msgr|lid)/g;
    function Y(e) {
      return "" + e + I;
    }
    function J(e) {
      return "" + e + M;
    }
    function Z(e) {
      return "" + e + g;
    }
    function ee(e) {
      return e.endsWith(p) ? e : "" + e + p;
    }
    function te(e) {
      return e.endsWith(x) ? e : "" + e + x;
    }
    function ne(e) {
      return e.endsWith(q) ? e : "" + e + q;
    }
    function re(e) {
      return e.endsWith(H) ? e : "" + e + H;
    }
    function oe() {
      return p;
    }
    function ae(e) {
      if (e.endsWith(I)) return e.slice(0, -I.length);
      if (e.endsWith(g)) return e.slice(0, -g.length);
      if (e.endsWith(y)) return e.slice(0, -y.length);
      if (e.endsWith(M)) return e.slice(0, -M.length);
      if (e.endsWith(j)) return e.slice(0, -j.length);
      throw r("err")('userIdFromJid called with non-user jid "' + e + '"');
    }
    function ie(e, t) {
      return ae(e) + ":" + t + I;
    }
    function le(e, t) {
      return ae(e) + ":" + t + g;
    }
    function se(e, t) {
      return Ee(e) + ":" + t + M;
    }
    function ue(e, t) {
      return ae(e) + ":" + t + Ct(e);
    }
    function ce(e) {
      return "" + e + O;
    }
    function de(e) {
      return e.split("@")[0];
    }
    function me(e) {
      return e.split("@")[0];
    }
    function pe(e) {
      var t = e.split("@")[0],
        n = t.split(":"),
        r = n[0],
        o = n[1],
        a = parseInt(o, 10);
      return { userId: r, deviceID: a };
    }
    function _e(e) {
      var t = pe(e);
      return t.deviceID;
    }
    function fe(e, t) {
      return e === s || e === u ? t : de(e);
    }
    function ge(e) {
      return e === s || e === u ? null : e;
    }
    function he(e) {
      return e === s || e === u || !e.endsWith(I) ? null : e;
    }
    function ye(e) {
      if (!e.endsWith(I))
        throw r("err")(
          'phoneNumberFromJid called with non-user jid "' + e + '"',
        );
      return e.slice(0, -I.length);
    }
    function Ce(e) {
      if (e.endsWith(I)) return ye(e);
      if (e.endsWith(M)) return Ee(e);
      throw r("err")(
        'lidOrPhoneFromUserJid called with non phone or lid jid "' + e + '"',
      );
    }
    function be(e) {
      return e.endsWith(I) || e.endsWith(y) || e.endsWith(g) || e.endsWith(M)
        ? e
        : null;
    }
    function ve(e) {
      return e.endsWith(I) ? e : null;
    }
    function Se(e) {
      return e === c ? null : e;
    }
    function Re(e) {
      return e === c ? null : e;
    }
    function Le(e) {
      return e === c ? c : null;
    }
    function Ee(e) {
      if (!e.endsWith(M))
        throw r("err")(
          'lidFromLidUserJid called with non-LidUserJid "' + e + '"',
        );
      return e.slice(0, -M.length);
    }
    function ke(e) {
      var t = e.split("@"),
        n = t[0],
        r = t[1];
      return (
        (n = n.split(":")[0]),
        (n = n.split(".")[0]),
        r === U && (r = T),
        r === G && (r = D),
        n + "@" + r
      );
    }
    function Ie(e) {
      return ke(e);
    }
    function Te(e) {
      return ke(e);
    }
    function De(e) {
      return e.jidType === "phoneDevice" ||
        e.jidType === "interopDevice" ||
        e.jidType === "lidDevice" ||
        e.jidType === "msgrDevice"
        ? e.deviceJid
        : e.jidType === "lidUser" ||
            e.jidType === "interopUser" ||
            e.jidType === "msgrUser" ||
            e.jidType === "phoneUser"
          ? e.userJid
          : e.jidType === "group"
            ? e.groupJid
            : e.jidType === "status"
              ? e.statusJid
              : e.jidType === "call"
                ? e.callJid
                : e.jidType === "newsletter"
                  ? e.newsletterJid
                  : e.jidType === "hosted"
                    ? e.hostedDeviceJid
                    : e.jidType === "hostedLid"
                      ? e.hostedLidDeviceJid
                      : e.jidType === "bot"
                        ? e.botJid
                        : (e.jidType, e.broadcastJid);
    }
    function xe(t) {
      return ae(t) + ":" + e + I;
    }
    function $e(t) {
      return ae(t) + ":" + e + g;
    }
    function Pe(t) {
      return se(t, e);
    }
    function Ne(t) {
      return _e(t) === e;
    }
    function Me(e) {
      return e;
    }
    function we(e) {
      return e;
    }
    function Ae(e) {
      var t = e.split("@"),
        n = t[0],
        r = t[1],
        o = n.split(":"),
        a = o[0],
        i = o[1],
        l = a.split("."),
        s = l[0],
        u = l[1];
      return { user: s, device: i, agent: u, server: r };
    }
    function Fe(e) {
      var t = Ae(e),
        n = t.agent,
        r = n === void 0 ? "0" : n,
        o = t.device,
        a = o === void 0 ? "0" : o,
        i = t.server,
        l = t.user;
      return l + "." + r + ":" + a + "@" + i;
    }
    function Oe(e) {
      switch (e.jidType) {
        case "interopUser":
          return e.userJid;
        case "lidUser":
          return e.userJid;
        case "msgrUser":
          return e.userJid;
        case "phoneUser":
          return e.userJid;
        case "group":
          return e.groupJid;
        case "status":
          return e.statusJid;
        case "interopDevice":
          return e.deviceJid;
        case "lidDevice":
          return e.deviceJid;
        case "msgrDevice":
          return e.deviceJid;
        case "phoneDevice":
          return e.deviceJid;
        case "broadcast":
          return e.broadcastJid;
        case "call":
          return e.callJid;
        case "newsletter":
          return e.newsletterJid;
        case "hosted":
          return e.hostedDeviceJid;
        case "hostedLid":
          return e.hostedLidDeviceJid;
        case "bot":
          return e.botJid;
        default:
          return r("WAAssertUnreachable")(e.jidType);
      }
    }
    function Be(e) {
      if (e === m) return { jidType: "call", callJid: m };
      if (e === c) return { jidType: "status", statusJid: c };
      if (N.test(e)) return { jidType: "phoneUser", userJid: e };
      if (v.test(e)) return { jidType: "interopUser", userJid: e };
      if (R.test(e)) return { jidType: "msgrUser", userJid: e };
      if (L.test(e)) {
        var t = e.substr(0, e.indexOf(":"));
        return { jidType: "msgrUser", userJid: Z(t) };
      } else
        return P.test(e)
          ? { jidType: "phoneDevice", deviceJid: e }
          : b.test(e)
            ? { jidType: "interopDevice", deviceJid: e }
            : S.test(e)
              ? { jidType: "msgrDevice", deviceJid: e }
              : _.test(e)
                ? { jidType: "group", groupJid: e.endsWith(p) ? e : "" + e + p }
                : B.test(e)
                  ? { jidType: "broadcast", broadcastJid: e }
                  : W.test(e)
                    ? { jidType: "call", callJid: e }
                    : A.test(e)
                      ? { jidType: "lidUser", userJid: e }
                      : F.test(e)
                        ? { jidType: "lidDevice", deviceJid: e }
                        : $.test(e)
                          ? { jidType: "newsletter", newsletterJid: e }
                          : V.test(e)
                            ? { jidType: "hosted", hostedDeviceJid: e }
                            : z.test(e)
                              ? { jidType: "hostedLid", hostedLidDeviceJid: e }
                              : K.test(e)
                                ? { jidType: "bot", botJid: e }
                                : { jidType: "unknown" };
    }
    function We(e) {
      return e === "status@broadcast" ? e : null;
    }
    function qe(e) {
      if (N.test(e) || v.test(e) || R.test(e) || A.test(e) || K.test(e))
        return e;
      if (L.test(e)) {
        var t = e.substr(0, e.indexOf(":"));
        return Z(t);
      } else return null;
    }
    function Ue(e) {
      return A.test(e) ? e : null;
    }
    function Ve(e) {
      return B.test(e) ? e : null;
    }
    function He(e) {
      return P.test(e) ||
        S.test(e) ||
        b.test(e) ||
        F.test(e) ||
        V.test(e) ||
        z.test(e)
        ? e
        : N.test(e)
          ? bt(e)
          : K.test(e)
            ? vt(e)
            : null;
    }
    function Ge(e) {
      return b.test(e) ? e : null;
    }
    function ze(e) {
      return _.test(e) ? e : null;
    }
    function je(e) {
      return We(e) || ze(e) || Ve(e) ? e : null;
    }
    function Ke(e) {
      return W.test(e) ? e : null;
    }
    function Qe(e) {
      return e === "s.whatsapp.net" || e === "g.us" || e === "call" ? e : null;
    }
    function Xe(e) {
      return qe(e) || ze(e);
    }
    function Ye(e) {
      return $.test(e) ? e : null;
    }
    function Je(e) {
      return V.test(e) ? e : null;
    }
    function Ze(e) {
      return z.test(e) ? e : null;
    }
    function et(e) {
      return be(e) == null ? e : null;
    }
    function tt(e) {
      var t = Ae(e),
        n = t.device,
        r = n === void 0 ? "0" : n,
        o = t.server,
        a = t.user;
      return a + ":" + r + "@" + o;
    }
    function nt(e) {
      if (e.endsWith(p)) return e.slice(0, -p.length);
      throw r("err")('groupId called with non-group jid "' + e + '"');
    }
    function rt(e) {
      var t = Be(e);
      return t.jidType === "unknown"
        ? e
        : t.jidType === "status"
          ? t.statusJid
          : (t.jidType,
            Oe(t).replace(/^([^@]*)([^@][^@][^@][^@])@(.*)$/, "...$2@$3"));
    }
    function ot(e) {
      return e.includes("@") ? e.replace(X, rt) : e;
    }
    function at(e) {
      return e.endsWith(p) ? e : null;
    }
    function it(e, t) {
      if (e.endsWith(I)) return t.phoneUser(e);
      if (e.endsWith(g)) return t.msgrUser(e);
      if (e.endsWith(y)) return t.interopUser(e);
      if (e.endsWith(M)) return t.lidUser(e);
      if (at(e) != null) return t.group(e);
      throw r("err")("Can not switch on chat jid " + e);
    }
    function lt(e, t) {
      if (e.endsWith(g)) return t.user(e);
      if (at(e) != null) return t.group(e);
      throw r("err")("Can not switch on chat jid " + e);
    }
    function st(e, t) {
      if (e.endsWith(I)) return t.user(e);
      if (at(e) != null) return t.group(e);
      throw r("err")("Can not switch on chat jid " + e);
    }
    function ut(e, t) {
      return it(e, {
        lidUser: function (n) {
          return t.user(n);
        },
        interopUser: function (n) {
          return t.user(n);
        },
        msgrUser: function (n) {
          return t.user(n);
        },
        phoneUser: function (n) {
          return t.user(n);
        },
        group: function (n) {
          return t.group(n);
        },
      });
    }
    function ct(e, t) {
      return e === c ? t.status() : st(e, { user: t.user, group: t.group });
    }
    function dt(e, t) {
      return e === c
        ? t.status()
        : it(e, {
            interopUser: t.interopUser,
            phoneUser: t.phoneUser,
            msgrUser: t.msgrUser,
            lidUser: t.lidUser,
            group: t.group,
          });
    }
    function mt(e, t) {
      return e === c
        ? t.multicast(c)
        : st(e, { user: t.user, group: t.multicast });
    }
    function pt(e) {
      return e.endsWith(M);
    }
    function _t(e) {
      return e === "@me";
    }
    function ft(e) {
      return e === "@system";
    }
    function gt() {
      return g;
    }
    function ht() {
      return I;
    }
    function yt() {
      return E;
    }
    function Ct(e) {
      if (e.endsWith(I)) return I;
      if (e.endsWith(g)) return g;
      if (e.endsWith(M)) return M;
      if (e.endsWith(j)) return j;
      throw r("err")('userDomainFromJid called with non-user jid "' + e + '"');
    }
    function bt(t) {
      return ae(t) + ":" + e + Ct(t);
    }
    function vt(e) {
      return "" + ae(e) + Ct(e);
    }
    function St(e) {
      var t = e.platform,
        n = t === "msgr" ? g : I;
      function r(e) {
        return "" + e + n;
      }
      function o() {
        return n;
      }
      return { toUserJid: r, getUserDomain: o };
    }
    function Rt(e) {
      return e;
    }
    function Lt(e) {
      return e;
    }
    function Et(e) {
      return e;
    }
    function kt(e) {
      return e;
    }
    function It(e) {
      return e;
    }
    function Tt(e) {
      return e;
    }
    function Dt(e) {
      return e;
    }
    function xt(e) {
      return e;
    }
    function $t(e) {
      return e;
    }
    function Pt(e) {
      return e;
    }
    function Nt(e) {
      return e;
    }
    function Mt(e) {
      return e;
    }
    function wt(e) {
      return e;
    }
    function At(e) {
      return e;
    }
    function Ft(e) {
      return e;
    }
    function Ot(e) {
      return e;
    }
    function Bt(e) {
      return it(e, {
        group: function (t) {
          return nt(t);
        },
        lidUser: function (t) {
          return ae(t);
        },
        interopUser: function (t) {
          return ae(t);
        },
        phoneUser: function (t) {
          return ae(t);
        },
        msgrUser: function (t) {
          return ae(t);
        },
      });
    }
    function Wt() {
      return f;
    }
    ((l.DEFAULT_DEVICE_ID = e),
      (l.AUTHOR_ME = s),
      (l.AUTHOR_SYSTEM = u),
      (l.STATUS_JID = c),
      (l.PSA_JID = d),
      (l.CALL_LINK_JID = m),
      (l.MSGR_USER_DOMAIN = g),
      (l.MSGR_USER_JID_SUFFIX = h),
      (l.INTEROP_DOMAIN = y),
      (l.INTEROP_USER_JID_SUFFIX = C),
      (l.WA_SERVER_JID_SUFFIX = k),
      (l.WA_USER_DOMAIN = I),
      (l.WA_USER_JID_SUFFIX = T),
      (l.WA_LID_SUFFIX = D),
      (l.WA_NEWSLETTER_JID_DOMAIN = x),
      (l.LID_DOMAIN = M),
      (l.LID_SUFFIX = w),
      (l.HOSTED_DOMAIN = q),
      (l.HOSTED_SUFFIX = U),
      (l.HOSTED_LID_DOMAIN = H),
      (l.HOSTED_LID_SUFFIX = G),
      (l.BOT_DOMAIN = j),
      (l.SURVEY_USER_JID = Q),
      (l.toPhoneUserJid = Y),
      (l.toLidUserJid = J),
      (l.toMsgrUserJid = Z),
      (l.toGroupJid = ee),
      (l.toNewsletterJid = te),
      (l.toHostedDeviceJid = ne),
      (l.toHostedLidDeviceJid = re),
      (l.getGroupDomain = oe),
      (l.userIdFromJid = ae),
      (l.toPhoneDeviceJid = ie),
      (l.toMsgrDeviceJid = le),
      (l.toLidDeviceJid = se),
      (l.toDeviceJid = ue),
      (l.toBroadcastJid = ce),
      (l.extractUserId = de),
      (l.extractChatId__DANGEROUS = me),
      (l.extractDeviceIDParts = pe),
      (l.extractDeviceId = _e),
      (l.authorToUserId = fe),
      (l.authorAsUserJid = ge),
      (l.authorAsPhoneUserJid = he),
      (l.phoneNumberFromJid = ye),
      (l.lidOrPhoneFromUserJid = Ce),
      (l.interpretAsUserJid = be),
      (l.interpretAsPhoneUserJid = ve),
      (l.asChatJid = Se),
      (l.asPhoneChatJid = Re),
      (l.asStatusJid = Le),
      (l.lidFromLidUserJid = Ee),
      (l.extractUserJid = ke),
      (l.extractPhoneUserJid = Ie),
      (l.extractLidUserJid = Te),
      (l.extractJidFromJidWithType = De),
      (l.defaultPhoneDeviceJidForUser = xe),
      (l.defaultMsgrDeviceJidForUser = $e),
      (l.defaultLidDeviceJidForLidUserJid = Pe),
      (l.isPrimaryDevice = Ne),
      (l.interpretAsDeviceId = Me),
      (l.interpretAsNumber = we),
      (l.parseJidParts = Ae),
      (l.fullFormDeviceJidString = Fe),
      (l.extractFromJid = Oe),
      (l.interpretAndValidateJid = Be),
      (l.validateStatusJid = We),
      (l.validateUserJid = qe),
      (l.validateLidUserJid = Ue),
      (l.validateBroadcastJid = Ve),
      (l.validateDeviceJid = He),
      (l.validateInteropDeviceJid = Ge),
      (l.validateGroupJid = ze),
      (l.validateMulticastJid = je),
      (l.validateCallJid = Ke),
      (l.validateDomainJid = Qe),
      (l.validateChatJid = Xe),
      (l.validateNewsletterJid = Ye),
      (l.validateHostedDeviceJid = Je),
      (l.validateHostedLidDeviceJid = Ze),
      (l.asMulticastJid = et),
      (l.stripAgentIdFromPhoneDeviceJid = tt),
      (l.groupIdFromJid = nt),
      (l.sanitizeJidForLogging = rt),
      (l.maybeSanitizeLogLineText = ot),
      (l.interpretAsGroupJid = at),
      (l.switchOnChatJidType = it),
      (l.switchOnMsgrChatJidType = lt),
      (l.switchOnPhoneChatJidType = st),
      (l.switchOnUserChatJidType = ut),
      (l.switchOnPhoneJidType = ct),
      (l.switchOnJidType = dt),
      (l.switchOnMulticastJidType = mt),
      (l.isLidUser = pt),
      (l.isAuthorMe = _t),
      (l.isAuthorSystem = ft),
      (l.getMsgrUserDomain = gt),
      (l.getWhatsappUserDomain = ht),
      (l.getServerDomain = yt),
      (l.defaultDeviceJidForUser = bt),
      (l.defaultDeviceJidForBot = vt),
      (l.createJidUtils = St),
      (l.unsafeCoerceToChatJid = Rt),
      (l.unsafeCoerceToDeviceJid = Lt),
      (l.unsafeCoerceToPhoneDeviceJid = Et),
      (l.unsafeCoerceToMsgrDeviceJid = kt),
      (l.unsafeCoerceToInteropDeviceJid = It),
      (l.unsafeCoerceToLidDeviceJid = Tt),
      (l.unsafeCoerceToUserJid = Dt),
      (l.unsafeCoerceToLidUserJid = xt),
      (l.unsafeCoerceToPhoneUserJid = $t),
      (l.unsafeCoerceToInteropUserJid = Pt),
      (l.unsafeCoerceToMsgrUserJid = Nt),
      (l.unsafeCoerceToGroupJid = Mt),
      (l.unsafeCoerceToDeviceId = wt),
      (l.unsafeCoerceToNewsletterJid = At),
      (l.unsafeCoerceToHostedDeviceJid = Ft),
      (l.unsafeCoerceToHostedLidDeviceJid = Ot),
      (l.threadIdForChatJid = Bt),
      (l.getGroupCallDomain = Wt));
  },
  98,
);
