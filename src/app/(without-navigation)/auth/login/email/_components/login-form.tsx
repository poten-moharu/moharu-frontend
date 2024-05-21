'use client';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const formSchema = z.object({
  email: z.string().email({ message: '올바른 이메일 형식이 아닙니다.' }),
  password: z.string(),
});

const LoginForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex h-full flex-col gap-2 px-10"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>이메일</FormLabel>
              <FormControl>
                <Input placeholder="이메일 주소를 입력해주세요." {...field} />
              </FormControl>
              {form.formState.errors.email && <FormMessage />}
              {!form.formState.errors.email && (
                <FormDescription>
                  {!form.getValues('email')
                    ? '이메일 주소를 입력해주세요.'
                    : ''}
                </FormDescription>
              )}
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>비밀번호</FormLabel>
              <FormControl>
                <Input
                  placeholder="비밀번호를 입력해주세요."
                  type="password"
                  {...field}
                />
              </FormControl>
              {form.formState.errors.email && <FormMessage />}
              {!form.formState.errors.email && (
                <FormDescription>
                  {!form.getValues('password') && '비밀번호를 입력해주세요.'}
                </FormDescription>
              )}
            </FormItem>
          )}
        />

        {/* <div className="px-10">
          <Input
            label="이메일"
            type="email"
            placeholder="이메일을 입력해주세요."
            className="mb-5"
          />{' '}
          <FormMessage />
          <Input
            label="비밀번호"
            type="email"
            placeholder="비밀번호를 입력해주세요."
          />
        </div> */}
        <Button size="big" className="mt-auto">
          로그인
        </Button>
      </form>
    </Form>
  );
};

export default LoginForm;
