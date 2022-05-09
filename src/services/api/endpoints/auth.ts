import { baseApi as api } from "../baseApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    authorizeCheckCredentialsPlain: build.mutation<
      AuthorizeCheckCredentialsPlainApiResponse,
      AuthorizeCheckCredentialsPlainApiArg
    >({
      query: (queryArg) => ({
        url: `/v2.0/Authorize/CheckCredentialsPlain`,
        method: "POST",
        body: queryArg.loginViewRequest,
      }),
    }),
    authorizeCheckPinPlainV2: build.mutation<
      AuthorizeCheckPinPlainV2ApiResponse,
      AuthorizeCheckPinPlainV2ApiArg
    >({
      query: (queryArg) => ({
        url: `/v2.0/Authorize/CheckPinPlain`,
        method: "POST",
        body: queryArg.pinViewRequest,
      }),
    }),
    authorizeCheckBioPlainV2: build.mutation<
      AuthorizeCheckBioPlainV2ApiResponse,
      AuthorizeCheckBioPlainV2ApiArg
    >({
      query: (queryArg) => ({
        url: `/v2.0/Authorize/CheckBioPlain`,
        method: "POST",
        body: queryArg.bioViewRequest,
      }),
    }),
    authorizeCheckChallengePlain: build.mutation<
      AuthorizeCheckChallengePlainApiResponse,
      AuthorizeCheckChallengePlainApiArg
    >({
      query: (queryArg) => ({
        url: `/v2.0/Authorize/CheckChallengePlain`,
        method: "POST",
        body: queryArg.challengeViewRequest,
      }),
    }),
    authorizeCheckPasscodePlainV2: build.mutation<
      AuthorizeCheckPasscodePlainV2ApiResponse,
      AuthorizeCheckPasscodePlainV2ApiArg
    >({
      query: (queryArg) => ({
        url: `/v2.0/Authorize/CheckPasscodePlain`,
        method: "POST",
        body: queryArg.passcodeViewRequest,
      }),
    }),
    authorizeSendCodePlainV2: build.mutation<
      AuthorizeSendCodePlainV2ApiResponse,
      AuthorizeSendCodePlainV2ApiArg
    >({
      query: (queryArg) => ({
        url: `/v2.0/Authorize/SendCodePlain`,
        method: "POST",
        body: queryArg.sendViewRequest,
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as authApi };
export type AuthorizeCheckCredentialsPlainApiResponse =
  /** status 200  */ ChallengeSigninViewModel;
export type AuthorizeCheckCredentialsPlainApiArg = {
  loginViewRequest: LoginViewRequest;
};
export type AuthorizeCheckPinPlainV2ApiResponse =
  /** status 200 success */ TokenSigninViewModel;
export type AuthorizeCheckPinPlainV2ApiArg = {
  pinViewRequest: PinViewRequest;
};
export type AuthorizeCheckBioPlainV2ApiResponse =
  /** status 200 success */ TokenSigninViewModel;
export type AuthorizeCheckBioPlainV2ApiArg = {
  bioViewRequest: BioViewRequest;
};
export type AuthorizeCheckChallengePlainApiResponse =
  /** status 200 success */ ChallengeSigninViewModel;
export type AuthorizeCheckChallengePlainApiArg = {
  challengeViewRequest: ChallengeViewRequest;
};
export type AuthorizeCheckPasscodePlainV2ApiResponse =
  /** status 200 success */ TokenSigninViewModel;
export type AuthorizeCheckPasscodePlainV2ApiArg = {
  passcodeViewRequest: PasscodeViewRequest;
};
export type AuthorizeSendCodePlainV2ApiResponse =
  /** status 200 success */ ChallengeSigninViewModel;
export type AuthorizeSendCodePlainV2ApiArg = {
  sendViewRequest: SendViewRequest;
};
export type BaseSigninViewModel = {
  ResultMessage?: string;
};
export type UserHashSigninViewModel = BaseSigninViewModel & {
  UserHash?: string;
  SigninToken?: string;
};
export type TokenSigninViewModel = UserHashSigninViewModel & {
  AuthToken?: string;
  Action?: string;
};
export type KeyValuePairOfStringAndString = {
  Key?: string;
  Value?: string;
};
export type ChallengeSigninViewModel = TokenSigninViewModel & {
  ChallengeId?: string;
  ChallengeQuestion?: string;
  MFADevices?: KeyValuePairOfStringAndString[];
  MaskedMFASentTo?: string;
};
export type ValueProviderResult = {
  AttemptedValue?: string;
  Culture?: string;
  RawValue?: any;
};
export type Exception = {
  Message?: string;
  InnerException?: Exception;
  StackTrace?: string;
  Source?: string;
};
export type ModelError = {
  Exception?: Exception;
  ErrorMessage?: string;
};
export type ModelErrorCollection = ModelError[];
export type ModelState = {
  Value?: ValueProviderResult;
  Errors?: ModelErrorCollection;
};
export type ModelStateDictionary = {
  Count: number;
  IsReadOnly: boolean;
  IsValid: boolean;
  Keys?: string[];
  Values?: ModelState[];
  Item?: ModelState;
};
export type LoginViewRequest = {
  Username: string;
  Password: string;
  DeviceInfo?: string;
};
export type DeviceUserHashBaseRequest = {
  DeviceInfo: string;
  UserHash: string;
};
export type PinViewRequest = DeviceUserHashBaseRequest & {
  Pin: string;
};
export type BioViewRequest = DeviceUserHashBaseRequest & {
  BioId: string;
};
export type ChallengePasscodeBaseRequest = {
  UserHash: string;
  SigninToken: string;
  DeviceInfo?: string;
  Remember: boolean;
};
export type ChallengeViewRequest = ChallengePasscodeBaseRequest & {
  ChallengeId: string;
  ChallengeAnswer: string;
};
export type PasscodeViewRequest = ChallengePasscodeBaseRequest & {
  Passcode: string;
};
export type SendViewRequest = {
  UserHash: string;
  SigninToken: string;
  DeviceInfo?: string;
  MfaDeviceKey?: string;
  IsResendRequest: boolean;
};
export const {
  useAuthorizeCheckCredentialsPlainMutation,
  useAuthorizeCheckPinPlainV2Mutation,
  useAuthorizeCheckBioPlainV2Mutation,
  useAuthorizeCheckChallengePlainMutation,
  useAuthorizeCheckPasscodePlainV2Mutation,
  useAuthorizeSendCodePlainV2Mutation,
} = injectedRtkApi;
