__d(
  "WAWebBizBroadcastProInsightsStrings",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e() {
      return s._(/*BTDS*/ "Performance insights");
    }
    function u() {
      return s._(/*BTDS*/ "Messages sent");
    }
    function c() {
      return s._(/*BTDS*/ "Messages delivered");
    }
    function d() {
      return s._(/*BTDS*/ "Messages read");
    }
    function m() {
      return s._(/*BTDS*/ "Quick reply");
    }
    function p() {
      return s._(
        /*BTDS*/ "This number does not include messages sent to or from the European Union or Japan.",
      );
    }
    function _() {
      return s._(
        /*BTDS*/ "This number does not include messages sent to or from the European Union, the United Kingdom or Japan.",
      );
    }
    function f() {
      return [
        s._(
          /*BTDS*/ "The number of messages that your business sent to customers. Performance metrics are reported within 7 days after a message is sent.",
        ),
        p(),
      ];
    }
    function g() {
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
    function h() {
      return [
        s._(
          /*BTDS*/ "The number of messages that your business sent to customers that were delivered and read within 7 days of the message being sent.",
        ),
        s._(
          /*BTDS*/ "Some messages may not be delivered, such as when a customer's device is out of service.",
        ),
        p(),
      ];
    }
    function y() {
      return [
        s._(
          /*BTDS*/ "The number of WhatsApp accounts that replied within 7 days after receiving your template message.",
        ),
        _(),
      ];
    }
    function C() {
      return [
        s._(
          /*BTDS*/ "The number of times quick reply buttons in template messages sent from your WhatsApp Business account were clicked within 7 days after the messages were sent.",
        ),
      ];
    }
    function b() {
      return [s._(/*BTDS*/ "The number of clicks on the button."), _()];
    }
    function v() {
      return [
        s._(
          /*BTDS*/ "The percentage of messages read over the past 30 days. Read rate is the number of messages read divided by the number of messages delivered.",
        ),
        _(),
      ];
    }
    function S() {
      return [
        s._(
          /*BTDS*/ "The percentage of messages that received a reply. Reply rate is the number of messages that received a reply within 7 days divided by the number of messages delivered.",
        ),
        _(),
      ];
    }
    ((l.getInsightsDefinitionsEntryAriaLabel = e),
      (l.getSentTitle = u),
      (l.getDeliveredTitle = c),
      (l.getReadTitle = d),
      (l.getQuickReplyTitle = m),
      (l.getSentDefinitionDescription = f),
      (l.getDeliveredDefinitionDescription = g),
      (l.getReadsDefinitionDescription = h),
      (l.getRepliesDefinitionDescription = y),
      (l.getCustomReplyClicksDefinitionDescription = C),
      (l.getWebsiteClicksDefinitionDescription = b),
      (l.getReadRateDefinitionDescription = v),
      (l.getReplyRateDefinitionDescription = S));
  },
  226,
);
