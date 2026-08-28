__d(
  "CometIXTFacebookCDSXfacUniversalTriggerRootQuery.graphql",
  [
    "CometIXTFacebookCDSXfacUniversalTriggerRootQuery_facebookRelayOperation",
    "relay-runtime",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "input" },
          { defaultValue: null, kind: "LocalArgument", name: "scale" },
        ],
        t = [{ kind: "Variable", name: "input", variableName: "input" }],
        r = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "display_type",
          storageKey: null,
        },
        o = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "serialized_state",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "CometIXTFacebookCDSXfacUniversalTriggerRootQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: "IXTTriggerResponse",
              kind: "LinkedField",
              name: "ixt_xfac_universal_trigger",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "CIXScreen",
                  kind: "LinkedField",
                  name: "screen",
                  plural: !1,
                  selections: [
                    r,
                    {
                      alias: null,
                      args: null,
                      concreteType: null,
                      kind: "LinkedField",
                      name: "view_model",
                      plural: !1,
                      selections: [
                        {
                          args: null,
                          kind: "FragmentSpread",
                          name: "CIXFacebookCDSScreensRenderer_screen",
                        },
                        o,
                      ],
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "CometIXTFacebookCDSXfacUniversalTriggerRootQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: "IXTTriggerResponse",
              kind: "LinkedField",
              name: "ixt_xfac_universal_trigger",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "CIXScreen",
                  kind: "LinkedField",
                  name: "screen",
                  plural: !1,
                  selections: [
                    r,
                    {
                      alias: null,
                      args: null,
                      concreteType: null,
                      kind: "LinkedField",
                      name: "view_model",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "__typename",
                          storageKey: null,
                        },
                        {
                          kind: "TypeDiscriminator",
                          abstractKey: "__isCIXScreenViewModel",
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "CIXFacebookCDSScreensRenderer_screen",
                              fragmentName:
                                "CDSAdvertiserAuthenticityConfirmPhoneNumberIXTScreen_data",
                              fragmentPropName: "data",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "AdvertiserAuthenticityConfirmPhoneNumberScreenViewModel",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "CIXFacebookCDSScreensRenderer_screen",
                              fragmentName:
                                "CometAdvertiserAuthenticityConsolidatedEmailOtpIXTScreen_data",
                              fragmentPropName: "data",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "AdvertiserAuthenticityConsolidatedEmailOtpScreenViewModel",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "CIXFacebookCDSScreensRenderer_screen",
                              fragmentName:
                                "CometAdvertiserAuthenticityEnterPhoneCodeIXTScreen_data",
                              fragmentPropName: "data",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "AdvertiserAuthenticityEnterPhoneCodeScreenViewModel",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "CIXFacebookCDSScreensRenderer_screen",
                              fragmentName:
                                "CDSAdvertiserVerificationStandaloneOTPEmailInputScreen_data",
                              fragmentPropName: "data",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "AdvertiserVerificationStandaloneOTPEmailInputIXTScreenViewModel",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "CIXFacebookCDSScreensRenderer_screen",
                              fragmentName:
                                "CDSAdvertiserVerificationStandaloneOTPSmsInputScreen_data",
                              fragmentPropName: "data",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "AdvertiserVerificationStandaloneOTPSmsInputIXTScreenViewModel",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "CIXFacebookCDSScreensRenderer_screen",
                              fragmentName:
                                "CDSBVWizardAdvertiserVerificationEnterPhoneIXTScreen_data",
                              fragmentPropName: "data",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "BVWizardAdvertiserVerificationEnterPhoneIXTScreenViewModel",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "CIXFacebookCDSScreensRenderer_screen",
                              fragmentName:
                                "CDSBVWizardAdvertiserVerificationPhoneVerificationInformationIXTScreen_data",
                              fragmentPropName: "data",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "BVWizardAdvertiserVerificationPhoneVerificationInformationIXTScreenViewModel",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "CIXFacebookCDSScreensRenderer_screen",
                              fragmentName:
                                "CDSBVWizardAdvertiserVerificationSharingIXTScreen_data",
                              fragmentPropName: "data",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "BVWizardAdvertiserVerificationSharingIXTScreenViewModel",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "CIXFacebookCDSScreensRenderer_screen",
                              fragmentName:
                                "CDSBVWizardHowWeUseYourInfoIXTScreen_data",
                              fragmentPropName: "data",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "BVWizardHowWeUseYourInfoScreenViewModel",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "CIXFacebookCDSScreensRenderer_screen",
                              fragmentName: "CDSBVWizardOutroIXTScreen_data",
                              fragmentPropName: "data",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "BVWizardOutroIXTScreenViewModel",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "CIXFacebookCDSScreensRenderer_screen",
                              fragmentName:
                                "CDSBVWizardVerificationSharingSelectionIXTScreen_data",
                              fragmentPropName: "data",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "BVWizardVerificationSharingSelectionIXTScreenViewModel",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "CIXFacebookCDSScreensRenderer_screen",
                              fragmentName:
                                "CometChallengePhoneCallConsolidatedIXTScreen_data",
                              fragmentPropName: "data",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "ChallengePhoneCallConsolidatedIXTScreenViewModel",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "CIXFacebookCDSScreensRenderer_screen",
                              fragmentName:
                                "CometChallengePhoneOtpConsolidatedIXTScreen_data",
                              fragmentPropName: "data",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "ChallengePhoneOtpConsolidatedIXTScreenViewModel",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "CIXFacebookCDSScreensRenderer_screen",
                              fragmentName:
                                "CometChallengeSMSConfirmIXTScreen_data",
                              fragmentPropName: "data",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "ChallengeSMSConfirmIXTScreenViewModel",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "CIXFacebookCDSScreensRenderer_screen",
                              fragmentName:
                                "CometChallengeSMSConsolidatedIXTScreen_data",
                              fragmentPropName: "data",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "ChallengeSMSConsolidatedIXTScreenViewModel",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "CIXFacebookCDSScreensRenderer_screen",
                              fragmentName:
                                "CometChallengeSMSEnterCodeIXTScreen_data",
                              fragmentPropName: "data",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "ChallengeSMSEnterCodeIXTScreenViewModel",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "CIXFacebookCDSScreensRenderer_screen",
                              fragmentName: "CDSChallengeSelectIXTScreen_data",
                              fragmentPropName: "data",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "ChallengeSelectIXTScreenViewModel",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "CIXFacebookCDSScreensRenderer_screen",
                              fragmentName:
                                "CDSChallengeWhatsAppConfirmIXTScreen_data",
                              fragmentPropName: "data",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "ChallengeWhatsAppConfirmIXTScreenViewModel",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "CIXFacebookCDSScreensRenderer_screen",
                              fragmentName:
                                "CometChallengeWhatsAppConsolidatedIXTScreen_data",
                              fragmentPropName: "data",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "ChallengeWhatsAppConsolidatedIXTScreenViewModel",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "CIXFacebookCDSScreensRenderer_screen",
                              fragmentName:
                                "CDSChallengeWhatsAppEnterCodeIXTScreen_data",
                              fragmentPropName: "data",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "ChallengeWhatsAppEnterCodeIXTScreenViewModel",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "CIXFacebookCDSScreensRenderer_screen",
                              fragmentName:
                                "CDSIXTAuthenticityWizardBloksHandoffScreen_data",
                              fragmentPropName: "data",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "IXTAuthenticityWizardBloksHandoffScreenViewModel",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "CIXFacebookCDSScreensRenderer_screen",
                              fragmentName:
                                "CDSIXTAuthenticityWizardContactPointConfirmationScreen_data",
                              fragmentPropName: "data",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "IXTAuthenticityWizardContactPointConfirmationScreenViewModel",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "CIXFacebookCDSScreensRenderer_screen",
                              fragmentName:
                                "CDSIXTAuthenticityWizardContactPointConsentScreen_data",
                              fragmentPropName: "data",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "IXTAuthenticityWizardContactPointConsentScreenViewModel",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "CIXFacebookCDSScreensRenderer_screen",
                              fragmentName:
                                "CDSIXTAuthenticityWizardContactPointScreen_data",
                              fragmentPropName: "data",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "IXTAuthenticityWizardContactPointScreenViewModel",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "CIXFacebookCDSScreensRenderer_screen",
                              fragmentName:
                                "CDSIXTAuthenticityWizardContactPointSelectionScreen_data",
                              fragmentPropName: "data",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "IXTAuthenticityWizardContactPointSelectionScreenViewModel",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "CIXFacebookCDSScreensRenderer_screen",
                              fragmentName:
                                "CDSIXTAuthenticityWizardEmailConfirmationScreen_data",
                              fragmentPropName: "data",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "IXTAuthenticityWizardEmailConfirmationScreenViewModel",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "CIXFacebookCDSScreensRenderer_screen",
                              fragmentName:
                                "CDSIXTAuthenticityWizardEmailScreen_data",
                              fragmentPropName: "data",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "IXTAuthenticityWizardEmailScreenViewModel",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "CIXFacebookCDSScreensRenderer_screen",
                              fragmentName:
                                "CDSIXTAuthenticityWizardInflowReviewScreen_data",
                              fragmentPropName: "data",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "IXTAuthenticityWizardInflowReviewScreenViewModel",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "CIXFacebookCDSScreensRenderer_screen",
                              fragmentName:
                                "CDSIXTAuthenticityWizardIntroStepsScreen_data",
                              fragmentPropName: "data",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "IXTAuthenticityWizardIntroStepsScreenViewModel",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "CIXFacebookCDSScreensRenderer_screen",
                              fragmentName:
                                "CDSIXTAuthenticityWizardOutroScreen_data",
                              fragmentPropName: "data",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "IXTAuthenticityWizardOutroScreenViewModel",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "CIXFacebookCDSScreensRenderer_screen",
                              fragmentName:
                                "CDSIXTAuthenticityWizardProductSpecificIntroScreen_data",
                              fragmentPropName: "data",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "IXTAuthenticityWizardProductSpecificIntroScreenViewModel",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "CIXFacebookCDSScreensRenderer_screen",
                              fragmentName:
                                "CometIXTAuthenticityRedirectScreen_data",
                              fragmentPropName: "data",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "IXTCustomRedirectScreenViewModel",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "CIXFacebookCDSScreensRenderer_screen",
                              fragmentName: "CometIXTDismissFlowScreen_data",
                              fragmentPropName: "data",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "IXTDismissFlowScreenViewModel",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "CIXFacebookCDSScreensRenderer_screen",
                              fragmentName:
                                "CometIXTDismissFlowWithRedirectScreen_data",
                              fragmentPropName: "data",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "IXTDismissFlowWithRedirectScreenViewModel",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "CIXFacebookCDSScreensRenderer_screen",
                              fragmentName: "CDSIXTHelloWorldFirstScreen_data",
                              fragmentPropName: "data",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "IXTHelloWorldFirstScreenViewModel",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "CIXFacebookCDSScreensRenderer_screen",
                              fragmentName:
                                "CDSIXTAuthenticityWizardCameraCaptureOnboardingScreen_data",
                              fragmentPropName: "data",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "IXTIdCaptureFlowCameraCaptureOnboardingScreenViewModel",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "CIXFacebookCDSScreensRenderer_screen",
                              fragmentName:
                                "CDSIXTAuthenticityWizardCameraCaptureScreen_data",
                              fragmentPropName: "data",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "IXTIdCaptureFlowCameraCaptureScreenViewModel",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "CIXFacebookCDSScreensRenderer_screen",
                              fragmentName:
                                "CDSIXTAuthenticityWizardIdConsentScreen_data",
                              fragmentPropName: "data",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "IXTIdCaptureFlowConsentScreenViewModel",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "CIXFacebookCDSScreensRenderer_screen",
                              fragmentName:
                                "CDSIXTAuthenticityWizardDigitalIdMethodSelectScreen_data",
                              fragmentPropName: "data",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "IXTIdCaptureFlowDigitalIdMethodSelectScreenViewModel",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "CIXFacebookCDSScreensRenderer_screen",
                              fragmentName:
                                "CDSIXTAuthenticityWizardDocumentTypeSelectScreen_data",
                              fragmentPropName: "data",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "IXTIdCaptureFlowDocumentTypeScreenViewModel",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "CIXFacebookCDSScreensRenderer_screen",
                              fragmentName:
                                "CDSIXTAuthenticityWizardFilePickerScreen_data",
                              fragmentPropName: "data",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "IXTIdCaptureFlowFilePickerScreenViewModel",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "CIXFacebookCDSScreensRenderer_screen",
                              fragmentName:
                                "CDSIXTAuthenticityWizardGroupTwoUploadScreen_data",
                              fragmentPropName: "data",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "IXTIdCaptureFlowGroupTwoUploadScreenViewModel",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "CIXFacebookCDSScreensRenderer_screen",
                              fragmentName:
                                "CDSIXTAuthenticityWizardPhotoRequirementsScreen_data",
                              fragmentPropName: "data",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "IXTIdCaptureFlowPhotoRequirementsScreenViewModel",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "CIXFacebookCDSScreensRenderer_screen",
                              fragmentName:
                                "CDSIXTAuthenticityWizardSubmissionFeedbackScreen_data",
                              fragmentPropName: "data",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "IXTIdCaptureFlowSubmissionFeedbackScreenViewModel",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "CIXFacebookCDSScreensRenderer_screen",
                              fragmentName:
                                "CDSIXTAuthenticityWizardIdUploadMethodSelectScreen_data",
                              fragmentPropName: "data",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "IXTIdCaptureFlowUploadMethodScreenViewModel",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "CIXFacebookCDSScreensRenderer_screen",
                              fragmentName:
                                "CDSIXTXFACApproveFromAnotherDeviceDeniedScreen_data",
                              fragmentPropName: "data",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "IXTXFACChallengeApproveFromAnotherDeviceDeniedScreenViewModel",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "CIXFacebookCDSScreensRenderer_screen",
                              fragmentName:
                                "CDSIXTXFACApproveFromAnotherDevicePendingScreen_data",
                              fragmentPropName: "data",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "IXTXFACChallengeApproveFromAnotherDevicePendingScreenViewModel",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "CIXFacebookCDSScreensRenderer_screen",
                              fragmentName:
                                "CDSXFACBackNavRequestHandlerEmptyScreen_data",
                              fragmentPropName: "data",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "IXTXFACChallengeBackNavigationRequestHandlerScreenViewModel",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "CIXFacebookCDSScreensRenderer_screen",
                              fragmentName:
                                "CDSIXTAuthenticityFailedAttemptScreen_data",
                              fragmentPropName: "data",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "IXTXFACChallengeFailedAttemptScreenViewModel",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "CIXFacebookCDSScreensRenderer_screen",
                              fragmentName:
                                "CDSIXTAuthenticityUnsupportedSurfaceScreen_data",
                              fragmentPropName: "data",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "IXTXFACChallengeUnsupportedSurfaceScreenViewModel",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "CIXFacebookCDSScreensRenderer_screen",
                              fragmentName:
                                "CDSIXTAuthenticityGenericChallengeSelectorScreen_data",
                              fragmentPropName: "data",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "IXTXFACGenericChallengeSelectorScreenViewModel",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "CIXFacebookCDSScreensRenderer_screen",
                              fragmentName: "CDSIXTXFACIdpOAuthScreen_data",
                              fragmentPropName: "data",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "IXTXFACIdpOAuthScreenViewModel",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "CIXFacebookCDSScreensRenderer_screen",
                              fragmentName: "CDSIXTXFACPasskeyScreen_data",
                              fragmentPropName: "data",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "IXTXFACPasskeyScreenViewModel",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "CIXFacebookCDSScreensRenderer_screen",
                              fragmentName:
                                "CDSIXTXFACTwoFactorAuthenticationBaseCodeConfirmationScreen_data",
                              fragmentPropName: "data",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "IXTXFACTwoFactorAuthenticationBaseCodeConfirmationScreenViewModel",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "CIXFacebookCDSScreensRenderer_screen",
                              fragmentName:
                                "CDSIXTXFACTwoFactorAuthenticationSMSScreen_data",
                              fragmentPropName: "data",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "IXTXFACTwoFactorAuthenticationSMSScreenViewModel",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "CIXFacebookCDSScreensRenderer_screen",
                              fragmentName:
                                "CDSIXTXFACTwoFactorAuthenticationSecurityKeyErrorScreen_data",
                              fragmentPropName: "data",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "IXTXFACTwoFactorAuthenticationSecurityKeyErrorScreenViewModel",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "CIXFacebookCDSScreensRenderer_screen",
                              fragmentName:
                                "CDSIXTXFACTwoFactorAuthenticationSecurityKeyScreen_data",
                              fragmentPropName: "data",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "IXTXFACTwoFactorAuthenticationSecurityKeyScreenViewModel",
                          abstractKey: null,
                        },
                        o,
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "id",
                              storageKey: null,
                            },
                          ],
                          type: "Node",
                          abstractKey: "__isNode",
                        },
                      ],
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: n(
            "CometIXTFacebookCDSXfacUniversalTriggerRootQuery_facebookRelayOperation",
          ),
          metadata: {},
          name: "CometIXTFacebookCDSXfacUniversalTriggerRootQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    (n("relay-runtime").PreloadableQueryRegistry.set(e.params.id, e),
      (a.exports = e));
  },
  null,
);
