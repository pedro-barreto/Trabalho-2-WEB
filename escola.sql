PGDMP     :                    z            escola    14.1    14.1                 0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    16484    escola    DATABASE     f   CREATE DATABASE escola WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'Portuguese_Brazil.1252';
    DROP DATABASE escola;
                postgres    false            ;           1247    16491    enum_alunos_sexo    TYPE     K   CREATE TYPE public.enum_alunos_sexo AS ENUM (
    'M',
    'F',
    'O'
);
 #   DROP TYPE public.enum_alunos_sexo;
       public          postgres    false            >           1247    16498    enum_alunos_status    TYPE     P   CREATE TYPE public.enum_alunos_status AS ENUM (
    'ACTIVE',
    'ARCHIVED'
);
 %   DROP TYPE public.enum_alunos_status;
       public          postgres    false            ?            1259    16485    SequelizeMeta    TABLE     R   CREATE TABLE public."SequelizeMeta" (
    name character varying(255) NOT NULL
);
 #   DROP TABLE public."SequelizeMeta";
       public         heap    postgres    false            ?            1259    16570    alunos    TABLE     ?  CREATE TABLE public.alunos (
    id integer NOT NULL,
    nome character varying(255) NOT NULL,
    responsavel character varying(255) NOT NULL,
    sexo public.enum_alunos_sexo NOT NULL,
    nascimento character varying(255) NOT NULL,
    cpf character varying(255) NOT NULL,
    rg character varying(255) NOT NULL,
    serie integer NOT NULL,
    pais character varying(255) NOT NULL,
    estado character varying(255) NOT NULL,
    cidade character varying(255) NOT NULL,
    bairro character varying(255) NOT NULL,
    rua character varying(255) NOT NULL,
    n_casa character varying(255) NOT NULL,
    telefone character varying(255),
    celular character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL,
    status public.enum_alunos_status DEFAULT 'ACTIVE'::public.enum_alunos_status NOT NULL
);
    DROP TABLE public.alunos;
       public         heap    postgres    false    830    827    830            ?            1259    16569    alunos_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.alunos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.alunos_id_seq;
       public          postgres    false    211                       0    0    alunos_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.alunos_id_seq OWNED BY public.alunos.id;
          public          postgres    false    210            f           2604    16573 	   alunos id    DEFAULT     f   ALTER TABLE ONLY public.alunos ALTER COLUMN id SET DEFAULT nextval('public.alunos_id_seq'::regclass);
 8   ALTER TABLE public.alunos ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    211    210    211            ?          0    16485    SequelizeMeta 
   TABLE DATA           /   COPY public."SequelizeMeta" (name) FROM stdin;
    public          postgres    false    209   T       ?          0    16570    alunos 
   TABLE DATA           ?   COPY public.alunos (id, nome, responsavel, sexo, nascimento, cpf, rg, serie, pais, estado, cidade, bairro, rua, n_casa, telefone, celular, email, created_at, updated_at, status) FROM stdin;
    public          postgres    false    211   ?                  0    0    alunos_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.alunos_id_seq', 5, true);
          public          postgres    false    210            i           2606    16489     SequelizeMeta SequelizeMeta_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public."SequelizeMeta"
    ADD CONSTRAINT "SequelizeMeta_pkey" PRIMARY KEY (name);
 N   ALTER TABLE ONLY public."SequelizeMeta" DROP CONSTRAINT "SequelizeMeta_pkey";
       public            postgres    false    209            k           2606    16580    alunos alunos_cpf_key 
   CONSTRAINT     O   ALTER TABLE ONLY public.alunos
    ADD CONSTRAINT alunos_cpf_key UNIQUE (cpf);
 ?   ALTER TABLE ONLY public.alunos DROP CONSTRAINT alunos_cpf_key;
       public            postgres    false    211            m           2606    16578    alunos alunos_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.alunos
    ADD CONSTRAINT alunos_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.alunos DROP CONSTRAINT alunos_pkey;
       public            postgres    false    211            o           2606    16582    alunos alunos_rg_key 
   CONSTRAINT     M   ALTER TABLE ONLY public.alunos
    ADD CONSTRAINT alunos_rg_key UNIQUE (rg);
 >   ALTER TABLE ONLY public.alunos DROP CONSTRAINT alunos_rg_key;
       public            postgres    false    211            ?   9   x?32022 BCsSKc????ĒT?ĜҼ?b??b.#??????????1?|? ?$      ?   ?  x?}?M??0???W???L잠+*V??"?pRY?1??"?=vH?]DWr"93??yw??y??~Ξ?1g?%rJ?q?R??qDr?d?xi?? Ֆ??䜃??iӱ?:Z?β?3L+I(?g,!ǌp?????8?3????xa?K?4??Z'%?h???v?ِ? ????!B?????r?\?????Oo6???>?46ɇ|?Hه??sC?1?????P?\l??N?9fm??=??ũ5ZP???~FR+?4?<??\Į???ˈWՆ??a?=?W?????jeH??m??Pȝ???pLsA??8=???.?u-v.??}Ui??A?i[S??]?????3?x?>???????Qh*????Խ??V	??ߑ??!w?2??????????m6???h?+     