__d(
  "WAWebBizBroadcastProInsightsStrings",
  ["fbt", "WDSTextualLink.react", "react"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c() {
      return s._(/*BTDS*/ "Performance insights");
    }
    function d() {
      return s._(/*BTDS*/ "Insights update until delivery is completed.");
    }
    function m() {
      return s._(/*BTDS*/ "These metrics are {=m1}.", [
        s._implicitParam(
          "=m1",
          u.jsx(r("WDSTextualLink.react"), {
            href: "https://www.facebook.com/business/help/metrics-labeling#estimated",
            testid: "biz_broadcast_pro_insights_metrics_documentation_link",
            children: s._(/*BTDS*/ "in development"),
          }),
        ),
      ]);
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p() {
      return s._(/*BTDS*/ "Messages sent");
    }
    function _() {
      return s._(/*BTDS*/ "Messages delivered");
    }
    function f() {
      return s._(/*BTDS*/ "Messages read");
    }
    function g() {
      return s._(/*BTDS*/ "Quick reply");
    }
    function h() {
      return s._(
        /*BTDS*/ "This number does not include messages sent to or from the European Union or Japan.",
      );
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y() {
      return s._(
        /*BTDS*/ "This number does not include messages sent to or from the European Union, the United Kingdom or Japan.",
      );
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C() {
      return [
        s._(
          /*BTDS*/ "The number of messages that your business sent to customers. Performance metrics are reported within 7 days after a message is sent.",
        ),
        h(),
      ];
    }
    function b() {
      return [
        s._(
          /*BTDS*/ "The number of messages that were delivered within 7 days of the message being sent.",
        ),
        s._(
          /*BTDS*/ "Some messages may not be delivered, such as when a customer's device is out of service. This number does not include messages sent to or from the European Union or Japan.",
        ),
        s._(
          /*BTDS*/ "In some cases, this metric may be estimated and may differ from what's shown on your invoice due to small variations in data processing.",
        ),
      ];
    }
    function v() {
      return [
        s._(
          /*BTDS*/ "The number of messages that your business sent to customers that were delivered and read within 7 days of the message being sent.",
        ),
        s._(
          /*BTDS*/ "Some messages may not be delivered, such as when a customer's device is out of service.",
        ),
        h(),
      ];
    }
    function S() {
      return [
        s._(
          /*BTDS*/ "The number of WhatsApp accounts that replied within 7 days after receiving your template message.",
        ),
        y(),
      ];
    }
    function R() {
      return [
        s._(
          /*BTDS*/ "The number of times quick reply buttons in template messages sent from your WhatsApp Business account were clicked within 7 days after the messages were sent.",
        ),
      ];
    }
    function L() {
      return [s._(/*BTDS*/ "The number of clicks on the button."), y()];
    }
    function E() {
      return [
        s._(
          /*BTDS*/ "The percentage of messages read over the past 30 days. Read rate is the number of messages read divided by the number of messages delivered.",
        ),
        y(),
      ];
    }
    function k() {
      return [
        s._(
          /*BTDS*/ "The percentage of messages that received a reply. Reply rate is the number of messages that received a reply within 7 days divided by the number of messages delivered.",
        ),
        h(),
      ];
    }
    ((l.getInsightsDefinitionsEntryAriaLabel = c),
      (l.getProInsightsUpdateExplainer = d),
      (l.getInsightsDefinitionsDescription = m),
      (l.getSentTitle = p),
      (l.getDeliveredTitle = _),
      (l.getReadTitle = f),
      (l.getQuickReplyTitle = g),
      (l.getSentDefinitionDescription = C),
      (l.getDeliveredDefinitionDescription = b),
      (l.getReadsDefinitionDescription = v),
      (l.getRepliesDefinitionDescription = S),
      (l.getCustomReplyClicksDefinitionDescription = R),
      (l.getWebsiteClicksDefinitionDescription = L),
      (l.getReadRateDefinitionDescription = E),
      (l.getReplyRateDefinitionDescription = k));
  },
  226,
);
