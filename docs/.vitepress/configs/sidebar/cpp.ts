// 文件：navItems.ts
import type { DefaultTheme } from 'vitepress'

export const MODERNCPP: DefaultTheme.NavItemWithLink[] = [
  { text: 'C++11 decltype', link: '/cpp/modern/decltype' },
  { text: 'C++11 列表初始化', link: '/cpp/modern/init' },
  { text: 'C++11 nullptr', link: '/cpp/modern/nullptr' },
  { text: 'C++11 future', link: '/cpp/modern/future' },
  { text: 'C++11 tuple', link: '/cpp/modern/tuple' },
  { text: '左值、右值', link: '/cpp/basic/lrvalue' },
  { text: 'C++11 move', link: '/cpp/modern/move' },
  { text: '完美转发', link: '/cpp/modern/forward' },
  { text: 'C++14 make_unique', link: '/cpp/modern/make-unique' },
  { text: 'C++17 结构化绑定', link: '/cpp/modern/structured-binding' },
  { text: 'C++17 nodiscard', link: '/cpp/modern/nodiscard' },
  { text: 'C++17 optional', link: '/cpp/modern/optional' },
  { text: 'C++17 variant', link: '/cpp/modern/variant' },
  { text: 'C++17 在 if 语句中进行初始化', link: '/cpp/modern/if-init' },
  { text: 'C++17 string_view', link: '/cpp/basic/string' },
  { text: 'C++20 consteval 的作用？', link: '/cpp/modern/consteval' },
  { text: 'C++20 format 的作用？', link: '/cpp/modern/format' },
  { text: 'C++20 concept', link: '/cpp/modern/concept' },
  { text: 'C++20 三路比较操作符(<=>)', link: '/cpp/modern/cpp20-<=>' }
]

export const OSBG: DefaultTheme.NavItemWithLink[] = [
  { text: 'OS 内存地址空间的演化历程', link: '/os/pc-address' },
  { text: 'OS 启动之 BIOS', link: '/os/bios' },
  { text: 'OS 启动之 Boot Loader', link: '/os/boot-loader' },
  { text: 'OS 启动之加载操作系统', link: '/os/pc-address' },

  { text: 'OS 实模式、保护模式', link: '/os/real-mold' },
  { text: 'OS 分段、分页', link: '/os/seg-page' }
]

export const CPPSTL: DefaultTheme.NavItemWithLink[] = [
  { text: 'STL 组成部分', link: '/cpp/stl/summary' },
  { text: 'STL 容器', link: '/cpp/stl/container' },
  { text: 'map 和 unordered_map 的区别？', link: '/cpp/stl/map' },
  { text: 'STL 迭代器', link: '/cpp/stl/iterator' },
  { text: 'STL 迭代器失效', link: '/cpp/stl/iterator-fail' },
  { text: '空间配置器', link: '/cpp/stl/allocator' },
  { text: '容器动态链接可能产生的问题？', link: '/cpp/stl/dll' },
  { text: '容器是否线程安全', link: '/cpp/stl/sec' },
  { text: 'resize 和 reserve 的区别', link: '/cpp/stl/resize' },
  { text: 'vector 中 emplace_back 和 push_back 的区别？', link: '/cpp/stl/vector-push-back' }
]

export const CPPOOP: DefaultTheme.NavItemWithLink[] = [
  { text: '简单对象模型', link: '/cpp/oop/simple-oop' }
]

export const CppCoreGuidelinesNotes: DefaultTheme.NavItemWithLink[] = [
  { text: 'CppCoreGuidelines 读书笔记', link: '/cpp/coreguide/summary' },
  { text: 'C++ 编写健壮、可维护和可移植代码的策略', link: '/cpp/coreguide/iso' },
  { text: 'C++ 如何增强代码可读性', link: '/cpp/coreguide/p1' },
  { text: 'C++ 如何增强设计意图', link: '/cpp/coreguide/p3' },
  { text: '静态类型的力量：构建更稳定的C++程序', link: '/cpp/coreguide/p4' },
  { text: 'C++ 中利用编译期检查提升代码质量', link: '/cpp/coreguide/p5' },
  { text: '运行时的力量：确保C++程序的健壮性', link: '/cpp/coreguide/p6' },
  { text: '编码先行：C++中提前把握运行时错误', link: '/cpp/coreguide/p7' },
  { text: 'C++ 资源泄漏', link: '/cpp/coreguide/p8' },
  { text: 'C++ 资源泄漏', link: '/cpp/coreguide/p8' }
]

export const CPP: DefaultTheme.NavItemWithLink[] = [
  { text: '基础概念', link: '/cpp/basic/README' },
  { text: 'C++标准化：ANSI到ISO，从C++98到C++23的演变', link: '/cpp/basic/cpp-iso' },
  { text: 'const 和 define 的区别？', link: '/cpp/basic/const-define' },
  { text: '模版（template）', link: '/cpp/basic/template' },
  { text: 'enum class', link: '/cpp/basic/enum-class' },
  { text: 'struct 和 class 的区别？', link: '/cpp/basic/struct-class' },
  { text: 'pragma-once', link: '/cpp/basic/pragma-once' },
  { text: 'static_cast', link: '/cpp/basic/static-cast' },
  { text: 'dynamic_cast', link: '/cpp/basic/dynamic-cast' },
  { text: 'explicit', link: '/cpp/basic/explicit' },
  { text: '程序的内存布局', link: '/cpp/basic/program-section' },
  { text: '动态链接库和静态链接库的区别？', link: '/cpp/basic/dll-lib' },
  { text: '野指针', link: '/cpp/basic/dangling-pointer' },
  { text: '五种构造函数', link: '/cpp/basic/constructor' },
  { text: '只定义析构函数，会自动生成哪些构造函数？', link: '/cpp/basic/default-construct' },
  { text: '内存泄露', link: '/cpp/basic/memory-leak' },
  { text: 'C++ Rule of Three/Five/Zero ', link: '/cpp/basic/rule-three-five-zero' },
  { text: '重载和重写的区别？', link: '/cpp/basic/rewrite' },
  { text: '重载和重写的实现原理？', link: '/cpp/basic/rewrite-original' },
  { text: 'extern "C"', link: '/cpp/basic/extern-c' },
  { text: 'volatile', link: '/cpp/basic/volatile' },
  { text: '向上转型、向下转型', link: '/cpp/basic/updown-cast' },
  { text: '深拷贝、浅拷贝', link: '/cpp/basic/deep-copy' },
  { text: '静态多态、动态多态', link: '/cpp/basic/polymorphism' },
  { text: '友元关系', link: '/cpp/basic/friend' },
  { text: '派生类对基类方法的访问权限', link: '/cpp/basic/public-private-protect' },
  { text: '函数指针、指针函数和回调函数的区别？', link: '/cpp/basic/function-pointer' },
  { text: '纯虚函数、虚函数的区别', link: '/cpp/basic/pure-vptr' },
  { text: '常函数', link: '/cpp/basic/const-member-functions' },
  { text: 'mutable', link: '/cpp/basic/mutable' },
  { text: '仿函数', link: '/cpp/basic/function-object' },
  { text: '类模版和模版类的区别？', link: '/cpp/basic/template-class' },
  { text: '引用和指针的区别', link: '/cpp/basic/reference' },
  { text: 'Placement new', link: '/cpp/basic/placement-new' },
  { text: 'new 和 malloc 的区别？', link: '/cpp/basic/delete-new' },
  { text: '虚析构、虚构造', link: '/cpp/basic/virtual-constructor' },
  { text: 'C++ 调用 main 之前做了什么？', link: '/cpp/basic/main-before' },
  { text: 'C++ 调用 main 之后做了什么？', link: '/cpp/basic/main-after' },
  { text: '成员初始化列表', link: '/cpp/basic/var-init' },
  { text: '宏do while包裹的好处？', link: '/cpp/basic/do-while' }
]

export const DESIGNPATTERN: DefaultTheme.NavItemWithLink[] = [
  { text: '23 种设计模式', link: '/designpattern/0-designpattern' },
  { text: '单例模式', link: '/designpattern/1-singleton' },
  { text: '工厂模式', link: '/designpattern/2-factory-method' },
  { text: '抽象模式', link: '/designpattern/3-abstract-factory' },
  { text: '建造者模式', link: '/designpattern/4-builder' },
  { text: '原型模式', link: '/designpattern/5-prototype' },
  { text: '适配器模式', link: '/designpattern/6-adapter' }
]
