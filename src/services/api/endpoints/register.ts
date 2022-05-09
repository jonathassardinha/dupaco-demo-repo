import { authApi as api } from './auth'

const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    registerMemberInfoV2: build.mutation<
      RegisterMemberInfoV2ApiResponse,
      RegisterMemberInfoV2ApiArg
    >({
      query: (queryArg) => ({
        url: `/v2.0/Register/MemberInfo`,
        method: 'POST',
        body: queryArg.memberInfoRegisterRequestBase,
      }),
    }),
    registerUserPassV2: build.mutation<RegisterUserPassV2ApiResponse, RegisterUserPassV2ApiArg>({
      query: (queryArg) => ({
        url: `/v2.0/Register/UserPass`,
        method: 'POST',
        body: queryArg.passwordRegisterRequestV2,
      }),
    }),
    registerTwoFactorEmailSetup: build.mutation<
      RegisterTwoFactorEmailSetupApiResponse,
      RegisterTwoFactorEmailSetupApiArg
    >({
      query: (queryArg) => ({
        url: `/v2.0/Register/TwoFactorEmailSetup`,
        method: 'POST',
        body: queryArg.twoFactorEmailRegisterRequest,
      }),
    }),
    registerTwoFactorEmailVerification: build.mutation<
      RegisterTwoFactorEmailVerificationApiResponse,
      RegisterTwoFactorEmailVerificationApiArg
    >({
      query: (queryArg) => ({
        url: `/v2.0/Register/TwoFactorEmailVerification`,
        method: 'POST',
        body: queryArg.twoFactorEmailVerificationRequest,
      }),
    }),
    registerTwoFactorEmailResend: build.mutation<
      RegisterTwoFactorEmailResendApiResponse,
      RegisterTwoFactorEmailResendApiArg
    >({
      query: (queryArg) => ({
        url: `/v2.0/Register/TwoFactorEmailResend`,
        method: 'POST',
        body: queryArg.twoFactorEmailRegisterRequest,
      }),
    }),
  }),
  overrideExisting: false,
})
export { injectedRtkApi as registerApi }
export type RegisterMemberInfoV2ApiResponse =
  /** status 200 User can register, run UserPass */ MemberInfoRegisterResponse
export type RegisterMemberInfoV2ApiArg = {
  memberInfoRegisterRequestBase: MemberInfoRegisterRequestBase
}
export type RegisterUserPassV2ApiResponse =
  /** status 200 Username and password are set, run TwoFactorEmailSetup */ undefined
export type RegisterUserPassV2ApiArg = {
  passwordRegisterRequestV2: PasswordRegisterRequestV2
}
export type RegisterTwoFactorEmailSetupApiResponse =
  /** status 200 Verification Code is sent */ undefined
export type RegisterTwoFactorEmailSetupApiArg = {
  twoFactorEmailRegisterRequest: TwoFactorEmailRegisterRequest
}
export type RegisterTwoFactorEmailVerificationApiResponse =
  /** status 200 AuthToken is returned, user is fully signed in now */ string
export type RegisterTwoFactorEmailVerificationApiArg = {
  twoFactorEmailVerificationRequest: TwoFactorEmailVerificationRequest
}
export type RegisterTwoFactorEmailResendApiResponse =
  /** status 200 Verification Code is re-sent */ undefined
export type RegisterTwoFactorEmailResendApiArg = {
  twoFactorEmailRegisterRequest: TwoFactorEmailRegisterRequest
}
export type MemberInfoRegisterResponse = {
  Success?: string
  ResultMessage?: string
  SignupToken?: string
  UserHash?: string
  LastName?: string
}
export type MemberInfoRegisterRequestBase = {
  DeviceInfo: string
  MemberNumber: string
  Tin: string
  AccountNumber: string
}
export type PasswordRegisterRequest = {
  DeviceInfo: string
  UserHash: string
  SignupToken: string
  Username: string
  Password: string
}
export type PasswordRegisterRequestV2 = PasswordRegisterRequest & {
  AcceptTerms: boolean
}
export type TwoFactorEmailRegisterRequest = {
  SignupToken: string
  UserHash: string
  DeviceInfo: string
  Value: string
}
export type TwoFactorEmailVerificationRequest = {
  SignupToken: string
  UserHash: string
  DeviceInfo: string
  Code: string
}
export const {
  useRegisterMemberInfoV2Mutation,
  useRegisterUserPassV2Mutation,
  useRegisterTwoFactorEmailSetupMutation,
  useRegisterTwoFactorEmailVerificationMutation,
  useRegisterTwoFactorEmailResendMutation,
} = injectedRtkApi
