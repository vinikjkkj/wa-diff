__d(
  "WAWebNotificationDeliveryWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumNotificationActionType",
    "WAWebWamEnumNotificationDestinationType",
    "WAWebWamEnumNotificationSourceType",
    "WAWebWamEnumNotificationTypeEnum",
    "WAWebWamEnumPeripheralDeviceType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          NotificationDelivery: [
            3748,
            {
              channelMilestoneValue: [14, e.TYPES.INTEGER],
              cid: [15, e.TYPES.STRING],
              clientMessageId: [1, e.TYPES.STRING],
              isSilenced: [11, e.TYPES.BOOLEAN],
              notificationAction: [
                2,
                o("WAWebWamEnumNotificationActionType")
                  .NOTIFICATION_ACTION_TYPE,
              ],
              notificationDeliveryT: [3, e.TYPES.INTEGER],
              notificationDestination: [
                4,
                o("WAWebWamEnumNotificationDestinationType")
                  .NOTIFICATION_DESTINATION_TYPE,
              ],
              notificationId: [5, e.TYPES.STRING],
              notificationSource: [
                6,
                o("WAWebWamEnumNotificationSourceType")
                  .NOTIFICATION_SOURCE_TYPE,
              ],
              peripheralDeviceOrigin: [
                9,
                o("WAWebWamEnumPeripheralDeviceType").PERIPHERAL_DEVICE_TYPE,
              ],
              postId: [16, e.TYPES.STRING],
              pushToNotifT: [10, e.TYPES.TIMER],
              threadId: [7, e.TYPES.STRING],
              traceIdInt: [13, e.TYPES.INTEGER],
              triggeredByOfflineMessage: [12, e.TYPES.BOOLEAN],
              uiNotificationType: [
                8,
                o("WAWebWamEnumNotificationTypeEnum").NOTIFICATION_TYPE_ENUM,
              ],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { NotificationDelivery: [] },
      );
    l.NotificationDeliveryWamEvent = s;
  },
  98,
);
